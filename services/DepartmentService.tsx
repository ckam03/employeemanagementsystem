export const getDepartments = async () => {
  const url = "https://localhost:7118/Department"
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
