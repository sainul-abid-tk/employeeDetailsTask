import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateEmployeeAPI } from '../Services/allAPIs';
function EmployeeUpdate({employee}) {
  const [editEmpData,setEditEmpData]=useState({
    name:'',
    role:''
  })
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setEditEmpData({name:employee?.name,role:employee?.role})
  };
  const handleShow = () => setShow(true);
  useEffect(()=>{
    setEditEmpData({name:employee?.name,role:employee?.role})
  },[employee])
  console.log(employee?.name);
  const handleUpdateEmployee=async()=>{
    // here we can use toaster or another outside library instead of alert
     const {name,role}=editEmpData
     if(!name || !role){
        alert("Please fill the form Completely!!!")
        setEditEmpData({name:employee?.name,role:employee?.role})
     }else{
      try{
        const result=await updateEmployeeAPI(employee.id,editEmpData)
        if(result.status===200){
           alert("Employee Details Updated Successfully!!!")
           handleClose()
           setEditEmpData({
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
      <button onClick={handleShow} className='me-3 btn btn-link'><i class="fa-solid fa-pen-to-square text-info fs-3 "></i></button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold fs-3'>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control value={editEmpData.name} onChange={(e)=>setEditEmpData({...editEmpData,name:e.target.value})} type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Role">
        <Form.Control value={editEmpData.role} onChange={(e)=>setEditEmpData({...editEmpData,name:e.target.value})} type="text" placeholder="Role" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdateEmployee}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EmployeeUpdate