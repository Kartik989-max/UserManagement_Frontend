import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AddUser from "./pages/addUser/AddUser.tsx";
import EditUser from "./pages/editUser/EditUser.tsx";
import UserTable from "./components/userTable/UserTable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "",
       element: <UserTable />
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "edit-user/:id",
        element: <EditUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
