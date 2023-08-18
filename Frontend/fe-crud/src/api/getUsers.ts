export const getUsers = async () => {
  const res = await fetch(`https://backend-fs-pi.vercel.app/users`)
  return await res.json()
}