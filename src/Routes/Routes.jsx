import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ClassesCard from "../Pages/ClassesCard/ClassesCard";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClasses from "../Pages/Dashboard/AddClasses/AddClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorData from "../Pages/InstructorData/InstructorData";
import Payment from "../Pages/Payment/Payment";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/classesCard',
          element:<ClassesCard></ClassesCard>
        },
        {
          path:'instructors',
          element:<InstructorsPage></InstructorsPage>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'myenrolledclasses',

        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addclasses',
          element:<AddClasses></AddClasses>
        },
        {
          path:'manageclasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'instructorclasses',
          element:<InstructorData></InstructorData>
        }
      ]
    }
  ]);