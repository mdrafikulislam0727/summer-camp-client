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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClasses from "../Pages/Dashboard/AddClasses/AddClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorData from "../Pages/InstructorData/InstructorData";
import Payment from "../Pages/Payment/Payment";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnroledClasses/MyEnrolledClasses";
import DashboardWc from "../Pages/Dashboard/DashboardWc/DashboardWc";



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
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"dashboardHome",
          element:<DashboardWc></DashboardWc>
        },
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
        },
        {
          path:'myenrolledclasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>

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