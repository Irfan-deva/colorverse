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
import Contact from './pages/Contact';


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
      errorElement: <div>oops, Something went wrong</div>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/form",
          element: <Form />
        },
        {
          path: "/contact",
          element: <Contact />
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