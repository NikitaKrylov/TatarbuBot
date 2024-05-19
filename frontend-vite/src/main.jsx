import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Registration from './pages/registration/Registration.jsx'

import QuizAudio1 from './components/quizzes/audio/Audio_1/QuizAudio1.jsx';
import QuizGrammar1 from './components/quizzes/grammar/grammar1/QuizGrammar1.jsx'
import QuizGrammar2 from './components/quizzes/grammar/grammar2/QuizGrammar2.jsx'

import Course from './pages/course/Course.jsx';
import QuizSpeaking from './components/quizzes/speaking/QuizSpeaking.jsx';
import Lesson from './pages/lesson/Lesson.jsx';
// import Sing from './pages/sing/Sing.jsx';
import Player from './components/player/Player.jsx'
import SingMain from './pages/singMain/SingMain.jsx';


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
    element: <QuizAudio1/>
  },
  {
    path:'/course/lesson3',
    element: <QuizGrammar1/>
  },
  {
    path:'/course/lesson4',
    element: <QuizGrammar2/>
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
  },
  {
    path:"/singMain",
    element: <SingMain/>
  },
  {
    path:"/player",
    element: <Player/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}/>
  </React.StrictMode>,
)
