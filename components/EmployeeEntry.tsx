import Image from "next/image"
import dude from "../images/alexey.jpg"

interface Employee {
  employeeId: string
  firstName: string
  lastName: string
  phoneNumber: string
  department: string
  salary: string
  email: string
}

const EmployeeEntry = ({
  employeeId,
  firstName,
  lastName,
  phoneNumber,
  department,
  salary,
  email,
}: Employee) => {
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
        <li>{department}</li>
        <li>{salary}</li>
        <li>{email}</li>
        <div className="space-x-2">
          <button className="bg-sky-300 p-1 rounded-lg text-sky-800 font-medium w-12 h-8">
            EDIT
          </button>
          <button className="border text-red-800 bg-red-300 font-medium p-1 rounded-lg h-8">
            DELETE
          </button>
        </div>
      </ul>
    </>
  )
}
export default EmployeeEntry
