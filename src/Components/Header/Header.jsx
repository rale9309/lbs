import React from "react";
import "./Header.scss"

function  Header(props) {
    return ( <div className="header"> 
        <h2>LBS Consulting</h2>
        <button onClick={props.goToHiringPage}>Hire new developer</button>
    </div> );
}

export default  Header;