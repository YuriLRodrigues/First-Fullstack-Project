export const getUsers = async () => {
  const res = await fetch(`http://localhost:8080/users`)
  return await res.json()
}