import { RegisterFormProps } from "../types/registerFormProps";
import { errorNotify, successNotify } from "../utils/notify";

export const postUser = async (data: RegisterFormProps) => {
  try {
    const res = await fetch("https://backend-fs-pi.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.confirmPassword,
      }),
    });
    const result = await res.json();
    successNotify("Success to register user")
    return result;
  } catch (error) {
    errorNotify("Failed to register user")
    console.log(error);
  }
};