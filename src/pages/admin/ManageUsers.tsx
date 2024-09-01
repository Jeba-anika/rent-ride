/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Spin, Table, type TableProps } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import RRButton from "../../components/common/RRButton";
import {
  useChangeStatusMutation,
  useGetAllUsersQuery,
  useMakeAdminMutation,
} from "../../redux/features/auth/authApi";
import { TUser } from "../../redux/features/auth/authSlice";

const ManageUsers = () => {
  const { data: users, isLoading } = useGetAllUsersQuery(undefined);
  console.log(users);
  const [changeStatus, { isLoading: isChangeStatusLoading }] =
    useChangeStatusMutation();
  const [makeAdmin, { isLoading: isMakeAdminLoading }] = useMakeAdminMutation();
  const [selectedRow, setSelectedRow] = useState<TUser | null>(null);

  const usersColumns: TableProps<TUser>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Action",
      key: "_id",
      render: (_, record) => (
        <Space size="middle">
          {record.role === "user" && (
            <RRButton
              isLoading={selectedRow === record && isMakeAdminLoading}
              styles="px-2 py-1"
              onClick={async () => {
                setSelectedRow(record);

                try {
                  const result = await makeAdmin(record);

                  if (result.data) {
                    toast.success("Status updated!");
                    setSelectedRow(null);
                  }
                } catch (err: any) {
                  toast.error(err.message);
                  setSelectedRow(null);
                }
              }}
            >
              Make Admin
            </RRButton>
          )}
          <Button
            loading={selectedRow === record && isChangeStatusLoading}
            onClick={async () => {
              setSelectedRow(record);

              try {
                const result = await changeStatus(record);

                if (result.data) {
                  toast.success("Status updated!");
                  setSelectedRow(null);
                }
              } catch (err: any) {
                toast.error(err.message);
                setSelectedRow(null);
              }
            }}
            danger={record?.status === "active" ? true : false}
          >
            {record?.status === "active" ? "Block" : "Active"}
          </Button>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <div>
      <Table columns={usersColumns} dataSource={users?.data} />
    </div>
  );
};

export default ManageUsers;
