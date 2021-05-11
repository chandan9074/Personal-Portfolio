import React, { useState , useEffect} from 'react';
import './App.css';

import Home from './hompage';

import RiseLoader
from "react-spinners/RiseLoader";

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
      <Home />}
    </div>
  );
}

export default App;
