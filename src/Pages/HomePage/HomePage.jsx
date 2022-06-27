import React, { useState } from "react";
import './HomePage.scss'
import Header from "../../Components/Header/Header";
import EmployeeCard from "../../Components/EmployeCard/EmployeCard";
import Modal from "../../Components/Modal/Modal";


function HomePage (props) {
        // state koji cuva podataka da li je modal otvoren ili zatvoren
        const [modalOpen, setModalOpen] = useState(false)
        // stejt koji cuva podatak o slelktovanom employee
        const [modalData, setModalData]= useState("")

    const selectEmployee = (obj) => {
        setModalData(obj)
    }


        const toogleModal = () => {
            setModalOpen(!modalOpen)
        }


    return ( 
        <div>
            <Header goToHiringPage = {props.togglePages}></Header>
            {props.developers.map(e => <EmployeeCard selectEmployee={selectEmployee} openModal= {toogleModal} employee={e}/>)}
            {modalOpen && <Modal data={modalData} toogleModal={toogleModal}></Modal>}
        </div>
     );
}

export default HomePage;

