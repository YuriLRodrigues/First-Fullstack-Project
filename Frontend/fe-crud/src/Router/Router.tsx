import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { Home } from "../pages/Home/Home";
import UserList from "../pages/UserList/UserList";
import Update from "../pages/UpdateUser/Update";
import Delete from "../pages/DeleteUser/Delete";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index:true,
      element: <Home />
    },
    {
      path: "/userlist",
      element: <UserList />
    },
    {
      path: "/update",
      element: <Update />
    },
    {
      path: "/delete",
      element: <Delete />
    }
  ],
  },
]);

export default router