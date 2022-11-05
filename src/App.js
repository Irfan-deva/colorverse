import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import './App.css'
import Form from './pages/Form';
import Navigation from './pages/Navigation';
import Home from './pages/Home';


function App() {
  const Layout = () => {
    return (

      <div>
        <Navigation />
        <Outlet />
      </div>

    )
  }

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "form",
          element: <Form />
        }
      ]
    }

  ])





  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App