export const getUsers = async () => {
  const users = await fetch(`http://localhost:8080/users`)
  return await users.json()
}