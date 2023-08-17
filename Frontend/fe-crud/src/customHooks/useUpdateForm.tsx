import { useForm } from "react-hook-form";
import { newPasswordProps } from "../types/updateFormProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "../schemas/updateSchema";

export const useUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<newPasswordProps>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      newPassword: "",
      newConfirmPassword: "",
      email: "",
    },
    resolver: zodResolver(newPasswordSchema),
  });
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting
  }
}
