import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import RRButton from "../common/RRButton";

const { Content, Sider } = Layout;

const DashboardLayout = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

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
          {
            route: "/manage-users",
            icon: UserOutlined,
            label: "Manage Users",
          },
        ]
  ).map((item) => ({
    key: `${item.route}`,
    icon: React.createElement(item.icon),
    label: (
      <Link onClick={() => setSelectedKey(item.route)} to={item.route}>
        {item.label}
      </Link>
    ),
  }));
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  if (!user) {
    return (
      <div className="flex justify-center gap-3 items-center mt-10">
        <h2 className="text-3xl ">Please Login!</h2>
        <Link to="/login">
          <RRButton styles="px-4 py-2">Login</RRButton>
        </Link>
      </div>
    );
  }

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
          defaultSelectedKeys={[selectedKey]}
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
