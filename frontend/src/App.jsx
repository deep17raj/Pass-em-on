import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Profile/MyProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MyProfile />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element:<Dashboard/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
