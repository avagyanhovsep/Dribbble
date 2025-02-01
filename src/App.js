import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shots from './pages/Shots';
import Designers from './pages/Designers';
import Jobs from './pages/Jobs';
import Hiring from './pages/Hiring';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shots' element={<Shots/>}/>
        <Route path='/designers' element={<Designers/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/hiring' element={<Hiring/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/session' element={<Login/>}/>
        <Route path='/stories' element={<Blog/>}/>
        <Route path='/shots/popular' element={<Shots />}/>
        <Route path='/shots/recent' element={<Shots />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
