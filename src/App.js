import React, { useEffect, useState } from "react";
import "./App.scss"
import HomePage from "./Pages/HomePage/HomePage";
import HiringPage from "./Pages/HiringPage/HiringPage";

function App() {

  const[frontendDevelopers, setfrontendDevelopers] = useState([])
  const [onHomePage, setOnHomePage] = useState(true)
  

useEffect(()=> {
  fetchFrontend()
},[onHomePage])



const togglePages = () => {
  setOnHomePage(!onHomePage)
}

  const fetchFrontend = () => {
    fetch('https://62b47b67da3017eabb0b8272.mockapi.io/frontend')
    .then(res=>res.json())
    .then(developers => setfrontendDevelopers(developers))
  }

  return ( 
    <div className="App">
      {onHomePage && <HomePage togglePages = {togglePages} 
      developers={frontendDevelopers}></HomePage>}
      {!onHomePage && <HiringPage togglePages= {togglePages}></HiringPage> }
    </div>
   );
}

export default App;