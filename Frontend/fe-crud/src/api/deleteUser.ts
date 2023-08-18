import { DeleteFormProps } from "../types/deleteFormProps";
import { errorNotify, successNotify } from "../utils/notify";

export const deleteUser = async ({ email, firstName, password }: DeleteFormProps) => {
  console.log('Deletando...')
  try {
    
    console.log('Tentando...')
    const user = await fetch("https://backend-fs-pi.vercel.app/users", {
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
    successNotify("Successfully deleted")
    return res
  } catch (error) {
    errorNotify("Failed to delete")
    console.log(error);
  }
};