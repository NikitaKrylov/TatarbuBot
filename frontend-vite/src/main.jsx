import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Registration from './pages/registration/Registration.jsx'

import QuizeAudio1 from './components/quizes/audio/audio1/QuizeAudio1.jsx';
import QuizeAudio2 from './components/quizes/audio/audio2/QuizeAudio2.jsx';

import Course from './pages/course/Course.jsx';

const routes = createBrowserRouter([
  {   
      path: '/',
      element: <Home />
  },
  {
    path:'/reg',
    element: <Registration/>
  },
  {
    path:'/course/quize1',
    element: <QuizeAudio1/>
  },
  {
    path:'/course/quize2',
    element: <QuizeAudio2/>
  },
  // {
  //   path:'/explore',
  //   element:<Explore/>
  // },
  // {
  //   path: '/interesting',
  //   element:<Dictionary />
  // },
  // {
  //   path: '/profile',
  //   element:<Profile/>
  // }

    path:"/course",
    element: <Course/>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}/>
  </React.StrictMode>,
)
