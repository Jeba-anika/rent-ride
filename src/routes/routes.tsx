import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../components/layouts/AdminLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import About from "../pages/About";
import CarDetails from "../pages/CarDetails";
import Cars from "../pages/Cars";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import Signup from "../pages/Signup";
import ManageBooking from "../pages/admin/ManageBooking";
import ManageCars from "../pages/admin/ManageCars";
import ManageUsers from "../pages/admin/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/:carId",
        element: <CarDetails />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/manage-users",
            element: (
              <AdminLayout>
                <ManageUsers />
              </AdminLayout>
            ),
          },
          {
            path: "/manage-cars",
            element: (
              <AdminLayout>
                <ManageCars />
              </AdminLayout>
            ),
          },
          {
            path: "/manage-booking",
            element: (
              <AdminLayout>
                <ManageBooking />
              </AdminLayout>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
