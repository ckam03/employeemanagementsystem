import { useState } from "react"
import NewEmployeeForm from "./NewEmployeeForm"

const CreateEmployee = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg bg-indigo-300 text-indigo-800 font-medium"
      >
        New Employee
      </button>

      {open && <NewEmployeeForm />}
    </>
  )
}
export default CreateEmployee
