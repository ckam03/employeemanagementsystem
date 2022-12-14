import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { getDepartments } from "../services/DepartmentService"
import { createEmployee } from "../services/EmployeeService"

interface IEmployeeForm {
  departmentId: number
  firstName: string
  lastName: string
  phoneNumber: string
  salary: string
  email: string
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
    <div className="forms">
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
          <button className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewEmployeeForm
