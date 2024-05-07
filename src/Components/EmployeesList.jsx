import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getEmployeesAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
function EmployeesList({employeeAddedResponse}) {
  const navigate=useNavigate()
  // demo for displaying datas in tabular or list form
  const data=[
      {
        "id": 331,
        "name": "anu",
        "role": "developer"
      },
      {
        "id": 334,
        "name": "mathews",
        "role": "flutter developer"
      },
      {
        "id": 373,
        "name": "Abhishek",
        "role": "flutter developer"
      },
      {
        "id": 377,
        "name": "anuvind ajayan",
        "role": "flutter developer"
      },
      {
        "id": 382,
        "name": "string",
        "role": "string"
      },
      {
        "id": 383,
        "name": "akshay",
        "role": "developer"
      },
      {
        "id": 384,
        "name": "akshay",
        "role": "developer"
      },
      {
        "id": 401,
        "name": "test",
        "role": "test1"
      },
      {
        "id": 402,
        "name": "string",
        "role": "string"
      }
  ]
  const [empList,setEmpList]=useState()
  const getAllEmpList=async()=>{
    try{
      const result=await getEmployeesAPI()
      if(result.status===200){
        setEmpList(result.data)
      }else{
        alert(result.response.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getAllEmpList()
  },[empList,employeeAddedResponse])

  return (
    <>
      <Table  striped bordered hover style={{cursor:'pointer'}}>
      <thead className='fs-5'>
        <tr>
          <th>No</th>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody style={{fontSize:'20px'}}>
        {/* here we should use empList state instead of data array */}
       {data.map((emp,index)=>(
        <tr onClick={()=>{
          navigate(`/employee/${emp.id}`)
        }}>
        <td>{index+1}</td>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.role}</td>
      </tr>
       ))
       }
      </tbody>
    </Table>
    </>
  )
}

export default EmployeesList