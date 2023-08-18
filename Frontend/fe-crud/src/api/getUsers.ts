export const getUsers = async () => {
  const res = await fetch(`https://backend-fs-pi.vercel.app/usersregister`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "import.meta.env.VITE_PASSWORD",
      user: "import.meta.env.VITE_USER"
    }),
  })
  return await res.json()
}