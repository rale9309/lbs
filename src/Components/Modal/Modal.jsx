import React from "react";
import "./Modal.scss"

function Modal(props) {
    return ( <div id="modal-container">
        <div className="modal-content">
            
        </div>
        <button className="close-modal" onClick={props.toogleModal}>X</button>
    </div> );
}

export default Modal