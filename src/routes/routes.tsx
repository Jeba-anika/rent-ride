import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import CarDetails from "../pages/CarDetails";
import Cars from "../pages/Cars";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
    ],
  },
]);

export default router;
