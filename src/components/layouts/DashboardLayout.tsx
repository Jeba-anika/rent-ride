import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const { Content, Sider } = Layout;

const DashboardLayout = () => {
  const user = useAppSelector((state) => state.auth.user);
  const items = (
    user?.role === "user"
      ? [
          { route: "/profile", icon: UserOutlined, label: "Manage Profile" },
          {
            route: "/manage-booking",
            icon: UploadOutlined,
            label: "Manage Booking",
          },
        ]
      : [
          { route: "/profile", icon: UserOutlined, label: "Manage Profile" },
          {
            route: "/manage-booking",
            icon: UploadOutlined,
            label: "Manage Booking",
          },
          { route: "/manage-cars", icon: UploadOutlined, label: "Manage Cars" },
          {
            route: "/manage-return-cars",
            icon: UploadOutlined,
            label: "Manage Return Cars",
          },
        ]
  ).map((item, index) => ({
    key: String(index + 1),
    icon: React.createElement(item.icon),
    label: <Link to={item.route}>{item.label}</Link>,
  }));
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen ">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ backgroundColor: "#8AB2FF" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          style={{ backgroundColor: "#8AB2FF" }}
        />
      </Sider>
      <Layout>
        <Content>
          <div
            style={{
              padding: 50,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
