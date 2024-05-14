import './assets/styles/global.scss';
import MainButton from './components/global/Button/MainButton';
import Bottom from './components/global/Bottom/Bottom'
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Registration/>}>
          <Route path='btn' element={<MainButton/>}/>
          <Route path='btm' element={<Bottom/>}/>
        </Route>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}