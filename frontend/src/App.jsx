import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Profile/MyProfile";
import OtherProfile from "./components/OtherProfile/OtherProfile";
import UploadNotes from "./components/Notesupload/UploadNotes";
import CourseNotesPage from "./components/RequestNotes/CourseNotesPage";
import AboutPage from "./components/AboutUs/AboutPage";
import NotesLibrary from "./components/NotesLibrary/NotesLibrary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
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
      element:<MyProfile/>,
    },
    {
      path: "/myprofile",
      element:<MyProfile/>,
    },
    {
      path: "/otherprofile",
      element:<OtherProfile/>,
    },
    {
      path: "/upload",
      element:<UploadNotes/>,
    },
    {
      path: "/request",
      element:<CourseNotesPage/>,
    },
    {
      path: "/about",
      element:<AboutPage/>,
    },
    {
      path: "/library",
      element:<NotesLibrary/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
