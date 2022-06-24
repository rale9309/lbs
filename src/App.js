import React, { useEffect, useState } from "react";
import "./App.scss"
import HomePage from "./Pages/HomePage/HomePage";
import HiringPage from "./Pages/HiringPage/HiringPage";

function App() {

  const[frontendDevelopers, setfrontendDevelopers] = useState([])
  // const[backendDevelopers, setBackendDevelopers] = useState([])
  // const[boardOfDierctors, setBoardOfDirectors] = useState([])
  // const[managers, setManagers] = useState([])


useEffect(()=> {
  fetchFrontend()
  // fetchBackend()
  // fetchBoardOfDirectors()
  // fetchManagers()
},[])

// const fetchData = (endpoint, setMethod) =>  {
//   fetch(`https://62b47b67da3017eabb0b8272.mockapi.io/${endpoint}`)
//   .then(res=>res.json())
//   .then(employees => setMethod(developers))
// }


  const fetchFrontend = () => {
    fetch('https://62b47b67da3017eabb0b8272.mockapi.io/frontend')
    .then(res=>res.json())
    .then(developers => setfrontendDevelopers(developers))
  }


  // const fetchBackend = () => {
  //   fetch('https://62b47b67da3017eabb0b8272.mockapi.io/backend')
  //   .then(res=>res.json())
  //   .then(developers => setBackendDevelopers(developers))
  // }

  // const fetchBoardOfDirectors = () => {
  //   fetch('https://62b47b67da3017eabb0b8272.mockapi.io/boardOfDirectors')
  //   .then(res=>res.json())
  //   .then(directors => setBoardOfDirectors(developers))
  // }


  // const fetchManagers = () => {
  //   fetch('https://62b47b67da3017eabb0b8272.mockapi.io/managers')
  //   .then(res=>res.json())
  //   .then(managers => setManagers(developers))
  // }


  return ( 
    <div className="App">
      <HomePage developers={frontendDevelopers}></HomePage>
      {/* <HiringPage></HiringPage> */}
    </div>
   );
}

export default App;