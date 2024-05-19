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
import SingMain from './pages/singMain/SingMain.jsx';
import Page1 from './pages/singPages/page1/Page1.jsx';
import Page2 from './pages/singPages/page2/Page2.jsx';
import Page3 from './pages/singPages/page3/Page3.jsx';
import Page4 from './pages/singPages/page4/Page4.jsx';




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
    path:'/course/lesson_1',
    element: <Lesson/>
  },
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
    path: '/sing/page_1',
    element: <Page1/>
  },
  {   
      path: '/sing/page_2',
      element: <Page2/>
  },
  {   
      path: '/sing/page_3',
      element: <Page3/>
  },
  {   
      path: '/sing/page_4',
      element: <Page4/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}/>
  </React.StrictMode>,
)
