import { createBrowserRouter } from 'react-router-dom';


import MainLayout from '../../src/Layout/MainLayout'
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../Layout/DashboardLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Singup/Singup';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AddService from '../Pages/Dashboard/AddService/AddService';
import ManageService from '../Pages/Dashboard/ManageService/ManageService';
import BookstoreAll from '../Pages/BookStore/BookstoreAll';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/bookstore",
        element: <BookstoreAll/>
      },
      {
        path: "/registation",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
    ]
  },
  {
    path: "/Dashboard",
    element: <PrivateRoute> <DashboardLayout /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "Addbook",
        element: <AddService />
      },
      {
        path: "managebook",
        element: <ManageService />
      },
   
    ]
  }
]);
