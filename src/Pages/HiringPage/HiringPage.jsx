import React, { useState } from'react';
import "./HiringPage.scss"
import Header from '../../Components/Header/Header';


function HiringPage(props) {

    const [body, setBody] = useState({
        fullName:"",
        technology : [],
        seniority :"",
        salary: 0,
        linkedin:""
    })

    const submitDeveloper= () => {
        fetch('https://62b47b67da3017eabb0b8272.mockapi.io/frontend',{
        method :"POST",
        body: JSON.stringify(body),
        headers :{
        "Content-Type" : "application/json"
        }

      })
      .then(res=>res.json())
      .then(res=> props.togglePages())
    }

    return ( 
        <div id='hiring-page'>
            <Header></Header>
            <h1>Hire new developer</h1>
            <div className='form'>
                <label htmlFor="">Full name :
                <input onChange={(event) => {
                    setBody({...body, fullName:event.target.value})
                }} type="text" id='fullname' placeholder='Name' />
                </label>

                <label htmlFor="">Technologies :
                <input onChange={(event) => {
                    setBody({...body, technology: event.target.value.split(',')})
                }} type="text" id='technology' placeholder='Technologies' />
                </label>

                <label htmlFor="">Seniority :
                <input onChange={(event) => {
                    setBody({...body, seniority:event.target.value})
                }} type="text" id='seniority' placeholder='Seniority' />
                </label>

                <label htmlFor="">Salary :
                <input  onChange={(event)=> {
                    setBody({...body, salary:event.target.value})
                }} type="number" id='salary' placeholder='Salary' />
                </label>

                <label htmlFor="">Linkedin :
                <input onChange={(event)=> {
                    setBody({...body, linkedin:event.target.value})
                }} type="text" id='linkedin' placeholder='Linkedin Profile' />
                </label>

                <button onClick={submitDeveloper}>Hire developer</button>
            </div>
        </div>
     );
}

export default HiringPage ;