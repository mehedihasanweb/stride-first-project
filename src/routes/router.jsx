import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import About from "../pages/About";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductDetails from "../pages/ProductDetails";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PrivateRoute from "./private/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import AllProducts from "../pages/Dashboard/AllProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import EditProduct from "../pages/Dashboard/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phones/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "dashboard/all-products",
        element: <AllProducts />,
      },
      {
        path: "dashboard/add-products",
        element: <AddProduct />,
      },
      {
        path: "dashboard/all-products/edit/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phones/${params.id}`),
      },
    ],
  },
]);

export default router;
