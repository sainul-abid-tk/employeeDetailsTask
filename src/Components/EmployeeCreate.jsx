import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployeeAPI } from '../Services/allAPIs';
function EmployeeCreate({setEmployeeAddedResponse}) {
  const [empData,setEmpData]=useState({
    name:"",
    role:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddEmployees=async()=>{
    // here we can use toaster or another outside library instead of alert
     const {name,role}=empData
     if(!name || !role){
        alert("Please fill the form Completely!!!")
     }else{
      try{
        const result=await addEmployeeAPI(empData)
        if(result.status===200){
           alert("New Employee Added Successfully!!!")
           setEmployeeAddedResponse(result.data)
           handleClose()
           setEmpData({
            name:"",
            role:""
           })
        }else{
          alert(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
     }
   
  }
  return (
    <div>
      <button onClick={handleShow} className='btn btn-success fs-6 '><i class="fa-solid fa-user-plus"></i>  Add</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold fs-3'>Add Employee +</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setEmpData({...empData,name:e.target.value})} type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Role">
        <Form.Control onChange={(e)=>setEmpData({...empData,role:e.target.value})} type="text" placeholder="Role" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddEmployees}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EmployeeCreate