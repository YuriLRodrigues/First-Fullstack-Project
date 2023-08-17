import { DeleteFormProps } from "../types/deleteFormProps";

export const deleteUser = async ({ email, firstName, password }: DeleteFormProps) => {
  console.log('Deletando...')
  try {
    
    console.log('Tentando...')
    const user = await fetch("http://localhost:8080/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
      }),
    });
    const res = await user.json();
    console.log(res)
    return res
  } catch (error) {
    console.log(error);
  }
};