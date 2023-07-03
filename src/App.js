import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import './App.css'
import Form from './pages/Form';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Popular from './pages/Popular';
import Navigation from './components/Navigation';


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
          path: "/popular",
          element: <Popular />
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