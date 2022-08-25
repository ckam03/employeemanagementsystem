import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface Employee {
  employeeId: string
  firstName: string
  lastName: string
  phoneNumber: string
  departmentName: string
  salary: string
  email: string
}

const EditEmployee = ({
  employeeId,
  firstName,
  lastName,
  phoneNumber,
  departmentName,
  salary,
  email,
}: Employee) => {
  const { handleSubmit, register } = useForm<Employee>()
  const onSubmit: SubmitHandler<Employee> = (data) => console.log(data)
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
            defaultValue={firstName}
            className="input-forms"
            {...register("firstName")}
          />
          <input
            type="text"
            placeholder="Last Name"
            defaultValue={lastName}
            className="input-forms"
            {...register("lastName")}
          />
          <input
            type="text"
            placeholder="Phone Number"
            defaultValue={phoneNumber}
            className="input-forms"
            {...register("phoneNumber")}
          />
          <input
            type="text"
            placeholder="Salary"
            defaultValue={salary}
            className="input-forms"
            {...register("salary")}
          />
          <input
            type="text"
            placeholder="Email Address"
            defaultValue={email}
            className="input-forms"
            {...register("email")}
          />

          <input
            type="number"
            placeholder="Department Id"
            className="input-forms"
            // {...register("departmentId")}
          />
          <button className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee
