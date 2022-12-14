export const getEmployees = async () => {
  const url = "https://localhost:7118/Employee"
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const result = await response.json()
  return result
}

export const createEmployee = async (employee: Employee) => {
  try {
    const url = `https://localhost:7118/Employee`
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const result = await response.json()
    return result
  } catch (err) {
    console.log(err)
  }
}

export const UpdateEmployee = async (employee: Employee) => {
  try {
    const url = `https://localhost:7118/Employee`
    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const result = await response.json()
    return result
  } catch (err) {
    console.log(err)
  }
}
