import Image from "next/image"
import dude from "../images/alexey.jpg"
import EmployeeEntry from "./EmployeeEntry"
import { Tab } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { getEmployees } from "../services/EmployeeService"
import CreateEmployee from "./CreateEmployee"

interface Employee {
  employeeId: string
  firstName: string
  lastName: string
  phoneNumber: string
  departmentName: string
  salary: string
  email: string
}

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    getEmployees().then((data) => {
      console.log(data);
      
      setEmployees(data)
    })

    return () => {}
  }, [])

  return (
    <>
    <div className="flex justify-end py-4">
    <CreateEmployee />
    </div>
      <ul className="grid grid-cols-8 items-center justify-items-center font-semibold border-b-2 border-gray-300 mt-2 text-gray-500">
        <li></li>
        <li>ID</li>
        <li>Full Name</li>
        <li>Phone Number</li>
        <li>Department</li>
        <li>Salary</li>
        <li>Email</li>
        <li>Actions</li>
      </ul>
      {employees.map((employee: Employee, index) => {
        return (
          <EmployeeEntry
            key={index.toString()}
            employeeId={employee.employeeId}
            firstName={employee.firstName}
            lastName={employee.lastName}
            phoneNumber={employee.phoneNumber}
            departmentName={employee.departmentName}
            salary={employee.salary}
            email={employee.email}
          />
        )
      })}
    </>
  )
}
export default EmployeeTable
