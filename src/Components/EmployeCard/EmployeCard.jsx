import React from "react";
import "./EmployeCard.scss"


function EmployeeCard (props) {
    return ( 
        <div id="employee-card">
            <h2>{props.employee.fullName}</h2>
            <h3>Seniority : {props.employee.seniority}</h3>
            <h3>Salary : {props.employee.salary}€</h3>
            <ul>
                {props.employee.technology.map(e=> <li>{e}</li>)}
            </ul>
            <button className="more-info" onClick={props.openModal}>Info</button>
        </div>
     );
}

export default EmployeeCard ;