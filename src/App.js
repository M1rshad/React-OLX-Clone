import React, {useEffect, useContext} from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import { AuthContext } from './context/AuthContext';

function App() {

  const {user} = useContext(AuthContext)
  useEffect(()=>{
    console.log(user);
    
  },[user])
  return (
    <div>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/signup'element={<Signup/>} />
      <Route path='/login'element={<Login/>} />
      </Routes>
    </div> 
  );
}

export default App;
