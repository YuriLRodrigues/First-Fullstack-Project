import { newPasswordProps } from "../types/updateFormProps";
import { errorNotify, successNotify } from "../utils/notify";

export const updateUser = async ({
  email,
  newConfirmPassword,
  newPassword,
}: newPasswordProps) => {
  try {
    const user = await fetch(
      `https://backend-fs-pi.vercel.app/users/update`,
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

    successNotify('User updated successfully')

    return await user.json();
  } catch (error) {
    errorNotify('Failed to update')
    console.log(error);
  }
};

