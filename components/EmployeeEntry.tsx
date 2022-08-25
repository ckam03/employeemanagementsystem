import Image from "next/image"
import { useState } from "react"
import dude from "../images/alexey.jpg"
import EditEmployee from "./EditEmployee"

interface Employee {
  employeeId: string
  firstName: string
  lastName: string
  phoneNumber: string
  departmentName: string
  salary: string
  email: string
}

const EmployeeEntry = ({
  employeeId,
  firstName,
  lastName,
  phoneNumber,
  departmentName,
  salary,
  email,
}: Employee) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <ul className="grid grid-cols-8 items-center justify-items-center font-medium bg-gray-200 text-gray-800 border rounded-xl mt-6 py-1 text-sm">
        <li>
          <Image
            src={dude}
            alt="man"
            height={56}
            width={56}
            className="border rounded-full object-cover"
          />
        </li>
        <li>{employeeId}</li>
        <li>
          {firstName} {lastName}
        </li>
        <li>{phoneNumber}</li>
        <li>{departmentName}</li>
        <li>{salary}</li>
        <li>{email}</li>
        <div className="space-x-2">
          <button
            onClick={() => setOpen(!open)}
            className="bg-sky-300 p-1 rounded-lg text-sky-800 font-medium w-12 h-8"
          >
            EDIT
          </button>
          <button className="border text-red-800 bg-red-300 font-medium p-1 rounded-lg h-8">
            DELETE
          </button>
        </div>
        {open && (
          <EditEmployee
            employeeId={employeeId}
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            departmentName={departmentName}
            salary={salary}
            email={email}
          />
        )}
      </ul>
    </>
  )
}
export default EmployeeEntry
