import { Tab } from "@headlessui/react"
import { Fragment } from "react"
import EmployeeTable from "./EmployeeTable"

const Table = () => {
    return (
        <>

<Tab.Group as="div" className="px-16">
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-gray-800 p-2 rounded font-medium border-b-4 border-blue-500"
                    : "bg-gray-100 text-black p-2 font-medium"
                }
              >
                Employees
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-gray-800 p-2 rounded font-medium border-b-4 border-blue-500"
                    : "bg-gray-100 text-black p-2 font-medium"
                }
              >
                Departments
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <EmployeeTable />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
        </>
    )
}

export default Table