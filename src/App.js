import React, { useState , useEffect} from 'react';
import './App.css';

import Home from './hompage';

import RiseLoader
from "react-spinners/RiseLoader";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContactMe from './ContactMepage/ContactMe';
import NavigationBar from './Shared/NavigationBar';
import ProjectDetails from './ProjectDetailspage/PorjectDetails';
import Blogs from './Blogs/Blogs';
import Aboutme from './Aboutme/Aboutme';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
        setLoading(false)
        }, 2000)
    }, [])

  
  return (
    <div className="App">

      {loading?
        <div className="open"><RiseLoader color={"#000000"} loading={loading} size={"3vh"}/></div> 
      :
      <BrowserRouter>
      {/* <NavigationBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </BrowserRouter>}
    </div>
  );
}

export default App;
