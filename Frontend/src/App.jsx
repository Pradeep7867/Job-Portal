import React from 'react'; // Import React
import { useState } from 'react'
import Navbar from './components/shared/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
