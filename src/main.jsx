import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//conf router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import Home from './router/Home.jsx';
import Contact from './router/Contact.jsx';
import ErrorPage from './router/ErrorPage.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    //pagina de erro
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
