/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Select,
  Space,
  Spin,
  Table,
  type TableProps,
} from "antd";
import { RcFile, UploadFile } from "antd/es/upload/interface";
import { useState } from "react";
import { toast } from "sonner";
import RRForm from "../../components/common/form/RRForm";
import RRInput from "../../components/common/form/RRInput";
import RRButton from "../../components/common/RRButton";
import RRModal from "../../components/common/RRModal";
import RRUpload from "../../components/common/RRUpload";
import {
  useCreateCarMutation,
  useDeleteCarMutation,
  useGetAllCarsQuery,
  useUpdateCarMutation,
} from "../../redux/features/cars/carsApi";
import { TCar } from "../../types/cars.type";

const ManageCars = () => {
  const [form] = Form.useForm();
  const { data: carData, isLoading } = useGetAllCarsQuery(undefined);
  console.log(carData);
  const [createCar, { isLoading: isAddCarLoading }] = useCreateCarMutation();
  const [updateCar, { isLoading: isUpdateCarLoading }] = useUpdateCarMutation();
  const [deleteCar, { isLoading: isDeleteCarLoading }] = useDeleteCarMutation();
  const [selectedCar, setSelectedCar] = useState<TCar | null>(null);
  const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);
  const [isUpdateCarModalOpen, setIsUpdateCarModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleCar = async (values) => {
    console.log(values);
    console.log(values.features.split(","));

    try {
      const formData = new FormData();
      const updatedCarData = {
        ...values,
        features: values.features.split(","),
        year: selectedYear,
        pricePerHour: Number(values.pricePerHour),
        numberOfSeats: Number(values.numberOfSeats),
        mileage: Number(values.numberOfSeats),
        insuranceInfo: {
          provider: values.provider,
          policyNumber: values.policyNumber,
          coverageDetails: values.coverageDetails,
        },
      };
      console.log(updatedCarData);
      formData.append("data", JSON.stringify(updatedCarData));
      console.log(fileList);
      fileList.forEach((file) => {
        console.log(file.originFileObj);
        if (file.originFileObj) {
          formData.append("images", file.originFileObj);
        }
      });
      let res: any = {};
      if (isAddCarModalOpen) {
        res = await createCar(formData);
      } else if (isUpdateCarModalOpen) {
        res = await updateCar({ carId: selectedCar?._id, carInfo: formData });
      }
      if (res?.data) {
        toast.success(isAddCarModalOpen ? "Car cretaed!" : "Car Updated");
        setIsAddCarModalOpen(false);
        setIsUpdateCarModalOpen(false);
        form.resetFields();
        setFileList([]);
        setSelectedStatus("");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeleteCar = async () => {
    const res: any = await deleteCar(selectedCar?._id);
    if (res?.data) {
      toast.success("Product Deleted Successfully!");
      setIsConfirmDeleteModalOpen(false);
    } else {
      toast.error(res?.error?.data?.message);
      setIsConfirmDeleteModalOpen(false);
    }
  };

  const carColumns: TableProps<TCar>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },

    {
      title: "Features",
      dataIndex: "features",
      key: "features",
      render: (_, record) => (
        <p>
          {record?.features?.map((feat: any) => (
            <span>{feat}, </span>
          ))}
        </p>
      ),
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },

    {
      title: "Action",
      key: "_id",
      render: (_, record: TCar) => (
        <Space size="middle">
          <RRButton
            styles="px-2 py-1"
            onClick={async () => {
              const modifiedImageList = [];
              for (let i = 0; i < record.images.length; i++) {
                const response = await fetch(record.images[i].url);

                const blob = await response.blob();
                const file = new File([blob], record.images[i].altText);
                const rcFile: RcFile = {
                  ...file,
                  uid: "-1",
                  lastModified: file.lastModified,
                  lastModifiedDate: new Date(file.lastModified),
                  name: file.name,
                  size: file.size,
                  type: file.type,
                  webkitRelativePath: file.webkitRelativePath,
                };

                modifiedImageList.push({
                  uid: rcFile.uid,
                  lastModifiedDate: new Date(),
                  name: record.images[i].altText,
                  url: URL.createObjectURL(file),
                  originFileObj: rcFile,
                });
              }
              setSelectedStatus(record.status);
              setFileList(modifiedImageList);
              setSelectedCar(record);
              setIsUpdateCarModalOpen(true);
              form.setFieldsValue(record);
              form.setFieldValue("provider", record.insuranceInfo.provider);
              form.setFieldValue(
                "policyNumber",
                record.insuranceInfo.policyNumber
              );
              form.setFieldValue(
                "coverageDetails",
                record.insuranceInfo.coverageDetails
              );
              form.setFieldValue("features", record.features.toString());
            }}
          >
            Update
          </RRButton>
          <Button
            onClick={() => {
              setIsConfirmDeleteModalOpen(true);
              setSelectedCar(record);
            }}
            danger
            shape="circle"
            icon={<DeleteOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];

  const handleUploadChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };
  const onYearChange: DatePickerProps["onChange"] = (date, dateString) => {
    setSelectedYear(dateString);
  };

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-2xl font-bold">Manage Cars</h3>
        <RRButton styles="px-5 py-2" onClick={() => setIsAddCarModalOpen(true)}>
          Add Car
        </RRButton>
      </div>
      <Table columns={carColumns} dataSource={carData?.data} />
      <RRModal
        isModalOpen={isAddCarModalOpen || isUpdateCarModalOpen}
        handleCancel={() => {
          isAddCarModalOpen
            ? setIsAddCarModalOpen(false)
            : setIsUpdateCarModalOpen(false);
        }}
        //handleOk={isAddCarModalOpen ? handleAddCar : handleUpdateCar}
        title={isAddCarModalOpen ? "Add Car" : "Edit Car"}
        footer={false}
      >
        <RRForm
          form={form}
          name="signup"
          onFinish={handleCar}
          submitBtnText={isAddCarModalOpen ? "Add Car" : "Update Car"}
          isBtnLoading={isUpdateCarLoading || isAddCarLoading}
        >
          <RRInput
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input Car Name!" }]}
            type="string"
          />
          <RRInput
            label="Car Type"
            name="carType"
            rules={[{ required: true, message: "Please input Car Type!" }]}
            type="string"
          />
          <Form.Item label="Product Images">
            <RRUpload
              fileList={fileList}
              handleUploadChange={handleUploadChange}
            />
          </Form.Item>
          <RRInput
            label="Color"
            name="color"
            rules={[{ required: true, message: "Please input car color!" }]}
          />
          <RRInput
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input car description!" },
            ]}
          />
          <RRInput
            label="Features"
            name="features"
            rules={[{ required: true, message: "Please input car features!" }]}
          />
          <RRInput
            label="Mileage"
            name="mileage"
            rules={[{ required: true, message: "Please input car mileage!" }]}
            type="number"
          />
          <RRInput
            label="Number of seats"
            name="numberOfSeats"
            rules={[
              { required: true, message: "Please input number of seats!" },
            ]}
            type="number"
          />
          <RRInput
            label="Price Per hour"
            name="pricePerHour"
            rules={[
              { required: true, message: "Please input price per hour!" },
            ]}
            type="number"
          />
          <RRInput
            label="Model"
            name="model"
            rules={[{ required: true, message: "Please input car model!" }]}
          />
          <Form.Item label="Pick Year">
            <DatePicker
              onChange={onYearChange}
              picker="year"
              className="w-full"
            />
          </Form.Item>
          {/* <RRInput
            label="Year"
            name="year"
            rules={[{ required: true, message: "Please input year!" }]}
          /> */}
          <Form.Item label=" Status">
            <Select
              className="w-full"
              value={selectedStatus}
              options={[
                { label: "available", value: "available" },
                { label: "unavailble", value: "unavailable" },
              ]}
              onSelect={(value) => setSelectedStatus(value)}
            />
          </Form.Item>
          <h2>Insurance Information</h2>
          <RRInput
            label="Provider"
            name="provider"
            rules={[
              {
                required: true,
                message: "Please input provider of the insurance!",
              },
            ]}
          />
          <RRInput
            label="Policy Number"
            name="policyNumber"
            rules={[
              {
                required: true,
                message: "Please input policy number of the insurance!",
              },
            ]}
          />
          <RRInput
            label="Coverage Details"
            name="coverageDetails"
            rules={[
              {
                required: true,
                message: "Please input coverage details of the insurance!",
              },
            ]}
          />
        </RRForm>
      </RRModal>
      <RRModal
        footer={() => (
          <>
            <Button
              danger
              loading={isDeleteCarLoading}
              onClick={handleDeleteCar}
            >
              Delete
            </Button>
          </>
        )}
        isModalOpen={isConfirmDeleteModalOpen}
        handleCancel={() => setIsConfirmDeleteModalOpen(false)}
        handleOk={handleDeleteCar}
        title={"Confirm Delete"}
      >
        <p>Are you sure you want to delete the product {selectedCar?.name}?</p>
      </RRModal>
    </div>
  );
};

export default ManageCars;
