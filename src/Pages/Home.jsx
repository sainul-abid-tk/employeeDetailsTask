import React, { useState } from 'react'
import EmployeeCreate from '../Components/EmployeeCreate'
import EmployeeList from '../Components/EmployeesList'

function Home() {
    const [employeeAddedResponse,setEmployeeAddedResponse]=useState() 
    // we can use ContextAPI Instead of this
  return (
    
   <div style={{height:'100vh'}} className='container-fluid '>
    <h1 className='text-center fw-bold mt-3' >Employees List</h1>
    <div className='d-flex justify-content-between  '>
     <div/>   
     <EmployeeCreate setEmployeeAddedResponse={setEmployeeAddedResponse}/>
    </div>
    <div className='d-flex justify-content-center mt-3'>
     <EmployeeList employeeAddedResponse={employeeAddedResponse}/>
    </div>
    </div>  
    
  )
}

export default Home