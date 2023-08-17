import { newPasswordProps } from "../types/updateFormProps";

export const updateUser = async ({
  email,
  newConfirmPassword,
  newPassword,
}: newPasswordProps) => {
  try {
    const user = await fetch(
      `http://localhost:8080/users/update`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword,
          passwordConfirmation: newConfirmPassword,
          email: email,
        }),
      }
    );
    return await user.json();
  } catch (error) {
    console.log(error);
  }
};

