import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { getDepartments } from "../services/DepartmentService"
import { createEmployee } from "../services/EmployeeService"

interface IEmployeeForm {
  firstName: string
  lastName: string
  phoneNumber: string
  salary: string
  email: string
  departmentId: number
}

interface Department {
  departmentId: number
  departmentName: string
}

const NewEmployeeForm = () => {
  const [departments, setDepartments] = useState<Department[]>([])

  const { handleSubmit, register } = useForm<IEmployeeForm>()
  const onSubmit: SubmitHandler<IEmployeeForm> = (data) => createEmployee(data)

  useEffect(() => {
    getDepartments().then((data) => {
      setDepartments(data)
    })
  }, [])

  return (
    <div className="h-[35rem] w-[40rem] bg-gray-50 z-100 shadow-lg rounded-lg absolute top-56 right-[40rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center font-medium py-6 text-xl">
          Employee Information
        </h1>
        <div className="flex flex-col px-32 space-y-2">
          <input
            type="text"
            placeholder="First Name"
            className="input-forms"
            {...register("firstName")}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-forms"
            {...register("lastName")}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input-forms"
            {...register("phoneNumber")}
          />
          <input
            type="text"
            placeholder="Salary"
            className="input-forms"
            {...register("salary")}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="input-forms"
            {...register("email")}
          />

          <input
            type="number"
            placeholder="Department Id"
            className="input-forms"
            {...register("departmentId")}
          />

          {/* <select
            className="p-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            {...register("department")}
          >
            {departments.map((department) => {
              return (
                <option
                  key={department.departmentId.toString()}
                  value={department.departmentName}
                  className="p-2 rounded-lg border-2 border-gray-200 w-full"
                >
                  {department.departmentName}
                </option>
              )
            })}
          </select> */}
          <button className="bg-indigo-300 text-indigo-800 p-2 rounded-lg font-medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewEmployeeForm
