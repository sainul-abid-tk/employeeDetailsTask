import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


// addEmployee API
export const addEmployeeAPI =async (empData)=>{
    return await commonAPI("POST",`${SERVER_URL}/employees/create/employees_create_create`,empData,"")
}
// get All Employees
export const getEmployeesAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/employees/employees_list`,"","")
}
// get a Employees
export const getAEmployeeAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/employees/${id}/employees_read`,"","")
}
// update a Employees
export const updateEmployeeAPI=async(id,empData)=>{
    return await commonAPI("PUT",`${SERVER_URL}/employees/update/${id}/employees_update_update`,empData,"")
}

// delete a Employee
export const deleteEmployeeAPI=async(id)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/employees/${id}/employees_delete`)
}
