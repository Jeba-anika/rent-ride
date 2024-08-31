/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import RRForm from "../components/common/form/RRForm";
import RRInput from "../components/common/form/RRInput";
import RRButton from "../components/common/RRButton";
import RRModal from "../components/common/RRModal";
import { useUpdateProfileMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ProfilePage = () => {
  const [form] = Form.useForm();
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const { user, token } = useAppSelector((state) => state.auth);
  console.log(user);
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateProfileMutation();
  const dispatch = useAppDispatch();

  const handleUpdateProfile = async (values) => {
    console.log(values);
    const updatedUserInfo = {
      ...values,
    };
    try {
      const result = await updateProfile(updatedUserInfo);
      if (result.error) {
        toast.error("Something went wrong!");
      }
      if (result.data) {
        toast.success("Profile Updated Successfully");
        console.log(result.data.data);
        dispatch(setUser({ user: result.data.data, token }));
        setIsUpdateProfileModalOpen(false);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <h2 className="my-4 text-3xl text-center font-bold">Profile Details</h2>
      <div className="flex justify-center">
        <div>
          <div className="border border-rrSkyBlue p-10 rounded text-xl">
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>
              Phone:{" "}
              {user?.phone ? user?.phone : "Phone Number is not updated!"}{" "}
            </p>
            <p>
              Address:{" "}
              {user?.address ? user?.address : "Address  is not updated!"}{" "}
            </p>
          </div>
          <div className="mt-5 text-center">
            <RRButton
              onClick={() => {
                setIsUpdateProfileModalOpen(true);
                form.setFieldsValue(user);
              }}
              styles="px-5 py-2"
            >
              Update Profile
            </RRButton>
          </div>
        </div>
      </div>
      <RRModal
        isModalOpen={isUpdateProfileModalOpen}
        title="Update Profile"
        handleCancel={() => setIsUpdateProfileModalOpen(false)}
        footer={false}
      >
        <RRForm
          form={form}
          name="signup"
          onFinish={handleUpdateProfile}
          submitBtnText="Update Profile"
          isBtnLoading={isUpdateProfileLoading}
        >
          <RRInput label="Name" name="name" />
          <RRInput label="Email" name="email" type="email" />
          <RRInput label="Phone" name="phone" />
          <RRInput label="Address" name="address" />
        </RRForm>
      </RRModal>
    </div>
  );
};

export default ProfilePage;
