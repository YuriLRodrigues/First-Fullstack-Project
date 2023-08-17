import { RegisterFormProps } from "../types/registerFormProps";

export const postUser = async (data: RegisterFormProps) => {
  try {
    const res = await fetch("http://localhost:8080/users", {
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
    return result;
  } catch (error) {
    console.log(error);
  }
};