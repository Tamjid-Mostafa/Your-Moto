import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller";
import BuyerOrders from "../Pages/Dashboard/BuyerOrders";
import MyProduct from "../Pages/Dashboard/MyProduct";
import ReportedItems from "../Pages/Dashboard/ReportedItems";
import Categories from "../Pages/Home/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Payment from "../Pages/Payment/Payment";
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/categories/:categoryName",
        element: <PrivateRoute><ProductListing /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://yourmoto-server-tamjid-mostafa.vercel.app/categories/${params.categoryName}`),
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
        path: "/dashboard/addproduct",
        element: <SellerRoute><AddProduct /></SellerRoute>
      },
      {
        path: "/dashboard/myproduct",
        element: <SellerRoute><MyProduct /></SellerRoute>
      },
      {
        path: "/dashboard/buyers",
        element: <AdminRoute><AllBuyer /></AdminRoute>
      },
      {
        path: "/dashboard/sellers",
        element: <AdminRoute><AllSeller /></AdminRoute>
      },
      {
        path: "/dashboard/reportedItems",
        element: <AdminRoute><ReportedItems /></AdminRoute>
      },
      {
        path: "/dashboard/orders",
        element: <PrivateRoute><BuyerOrders /></PrivateRoute>
      },
      {
        path: "/dashboard/payment/:id",
        element: <PrivateRoute><Payment /></PrivateRoute>,
        loader: ({params}) => fetch(`https://yourmoto-server-tamjid-mostafa.vercel.app/bookings/${params.id}`)
      },
      
    ],
  },
]);

export default router;
