import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ComplainAdmin } from "../features/app/adminPage/complain/admin-complain";
import { HomeAdmin } from "../features/app/adminPage/home/home-admin";
import { CategoryAdmin } from "../features/app/adminPage/category/category";
import { Complain } from "../features/app/userPage/Complain/complain";
import { Home } from "../features/app/userPage/Home/home";
import { Chart } from "../features/app/userPage/chart/chart";
import { Detail } from "../features/app/userPage/detailProduct/detailProduct";
import { ErrorRoute } from "../features/app/userPage/errorRoute";
import { Profile } from "../features/app/userPage/profile/profile";
import { LoginForm } from "../features/auth/login/login";
import { RegisterForm } from "../features/auth/register/register";
import AuthLayout from "../layouts/authLayout";
import RootLayout from "../layouts/rootLayout";
import { ProductAdmin } from "../features/app/adminPage/product/product";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "complain",
        element: <Complain />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorRoute />,
  },
  {
    path: "/admin/",
    element: <HomeAdmin />,
  },
  {
    path: "/admin/complain",
    element: <ComplainAdmin />,
  },
  {
    path: "/admin/category",
    element: <CategoryAdmin />,
  },
  {
    path: "/admin/product",
    element: <ProductAdmin />,
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}