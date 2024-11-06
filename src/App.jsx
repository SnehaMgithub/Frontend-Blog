import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog';
import CreateBlog from './Pages/CreateBlog';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import AdminPanel from './Pages/AdminPanel';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/create" element={<CreateBlog/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;