import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import BuyerOrders from "../Pages/Dashboard/BuyerOrders";
import DashContainer from "../Pages/Dashboard/DashContainer";
import MyProduct from "../Pages/Dashboard/MyProduct";
import Categories from "../Pages/Home/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import ProductListing from "../Pages/ProductsListing/ProductListing";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:categoryName",
        element: <ProductListing />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.categoryName}`),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashContainer/>
      },
      {
        path: "/dashboard/addproduct",
        element: <SellerRoute><AddProduct /></SellerRoute>
      },
      {
        path: "/dashboard/myproduct",
        element: <SellerRoute><MyProduct /></SellerRoute>
      },
      {
        path: "/dashboard/myproduct",
        element: <AdminRoute><AllBuyer /></AdminRoute>
      },
      {
        path: "/dashboard/orders",
        element: <PrivateRoute><BuyerOrders /></PrivateRoute>
      },
      
    ],
  },
]);

export default router;
