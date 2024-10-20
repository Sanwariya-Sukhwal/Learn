// import React from 'react'
import Courses from "./courses/Courses";
import Home from "./home/Home";
import Signup from "./components/Signup";
import { Navigate, Route,Routes } from "react-router-dom"

import About from "./components/About.jsx";

import Contact from './components/Contact.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider.jsx";


function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" 
        element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster />
    </div>
    </>
  );
}

export default App;
