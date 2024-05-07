import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { getAEmployeeAPI } from '../Services/allAPIs'
import EmployeeUpdate from '../Components/EmployeeUpdate'
import EmployeeDelete from '../Components/EmployeeDelete';
function Employee() {
  
  const [employee,setEmployee]=useState()
  
  const {id}=useParams()
  const getAEmployeeData=async()=>{
    try{
      const result=await getAEmployeeAPI(id)
      if(result.status===200){
        // here we want this (result.data) but iam create a demo
        setEmployee(result.data)
      }else{
        alert(result.response.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    // iam creating a demo
    setEmployee({
      id:337,
      name:'Sainul Abid Tk',
      role:'ME(A)RN Stack Developer'
    })
    getAEmployeeData()
  },[id])
  
  return (
    <div className='d-flex justify-content-center align-items-center  ' style={{height:'100vh'}}>
      <div className='shadow-lg bg-white w-50 container-fluid ' style={{height:'500px'}}>
          <h2 className='text-center mt-3 fw-bolder'>Employee Full details</h2>
          <div className='mt-5 container '>
          <h4 className='mb-5'><span className='fw-bolder '>ID:</span> {employee?.id}</h4>
          <h4 className='mb-5'><span className='fw-bolder '>Name:</span> {employee?.name}</h4>
          <h4 className='mb-5'><span className='fw-bolder '>Role:</span> {employee?.role}</h4>
          </div>

          <div className='d-flex justify-content-center '>
          <EmployeeUpdate employee={employee}/>
          <EmployeeDelete id={id}/>
        </div>

      </div>
    </div>
  )
}

export default Employee