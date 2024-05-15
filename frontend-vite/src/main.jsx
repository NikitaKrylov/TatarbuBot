import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Registration from './pages/registration/Registration.jsx'
const routes = createBrowserRouter([
  {   
      path: '/',
      element: <Home />
  },
  {
    path:'/reg',
    element: <Registration/>
  }
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}/>
  </React.StrictMode>,
)
