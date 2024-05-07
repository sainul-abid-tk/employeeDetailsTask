import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteEmployeeAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
function EmployeeDelete({id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate=useNavigate()
  const handleDeleteEmployee=async()=>{
    try{
      const result=await deleteEmployeeAPI(id)
      if(result.status===200){
        alert("Employee deleted Successfully!!")
        handleClose()
        navigate('/')
      }else{
        alert(result.response.data)
      }
    }catch(err){
       console.log(err);
    }
  }
  return (
    <div>
      <button onClick={handleShow} className='btn btn-link '><i class='fa-solid fa-trash text-danger fs-3'/></button>
          <Modal  centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fs-4 fw-bolder'>Do you want to delete this employee !!</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button variant="success" onClick={handleDeleteEmployee}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EmployeeDelete