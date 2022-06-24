import React, { useState } from "react";
import './HomePage.scss'
import Header from "../../Components/Header/Header";
import EmployeeCard from "../../Components/EmployeCard/EmployeCard";
import Modal from "../../Components/Modal/Modal";


function HomePage (props) {
        const [modalOpen, setModalOpen] = useState(false)

        const toogleModal = () => {
            setModalOpen(!modalOpen)
        }


    return ( 
        <div>
            <Header></Header>
            {props.developers.map(e => <EmployeeCard openModal= {toogleModal} employee={e}/>)}
            {modalOpen && <Modal toogleModal={toogleModal}></Modal>}
        </div>
     );
}

export default HomePage;

