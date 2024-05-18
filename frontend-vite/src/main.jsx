import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Registration from './pages/registration/Registration.jsx'

import QuizeAudio1 from './components/quizes/audio/audio1/QuizeAudio1.jsx';
import QuizeAudio21 from './components/quizes/audio/audio21/QuizeAudio21.jsx';
import QuizeGrammar1 from './components/quizes/grammar/grammar1/QuizeGrammar1.jsx'
import QuizeGrammar2 from './components/quizes/grammar/grammar2/QuizeGrammar2.jsx'

import Course from './pages/course/Course.jsx';
import QuizSpeaking from './components/quizes/speaking/QuizSpeaking.jsx';
import Lesson from './pages/lesson/Lesson.jsx';


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
    path:'/course/lesson1',
    element: <QuizeAudio1/>
  },
  {
    path:'/course/lesson2',
    element: <QuizeAudio21/>
  },
  {
    path:'/course/lesson3',
    element: <QuizeGrammar1/>
  },
  {
    path:'/course/lesson4',
    element: <QuizeGrammar2/>
  },
  {
    path:'/course/lesson_1',
    element: <Lesson/>
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
  {
    path:"/course",
    element: <Course/>
  },
  {
    path:"/course/speaking",
    element: <QuizSpeaking/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}/>
  </React.StrictMode>,
)
