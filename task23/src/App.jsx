import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Home from './pages/Home';
import Header from './pages/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App