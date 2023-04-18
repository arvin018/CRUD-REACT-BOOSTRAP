import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Content";
import  Add from "../pages/Add";
import Dashboard from "../pages/Dashboard";
import Edit from "../pages/Edit"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/add",
        element: <Add/>,
      },
      {
        path: "/table",
        element: <Dashboard/>,
      },
      {
        path: "/users/edit/:id",
        element: <Edit/>,
      },
    ],
  },
]);

export default router;
