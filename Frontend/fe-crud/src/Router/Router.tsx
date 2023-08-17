import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import { Home } from "../pages/Home/Home";
import UserList from "../pages/UserList/UserList";

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
    // {
    //   path: "*",
    //   element: <Home />
    // }
  ],
  },
]);

export default router