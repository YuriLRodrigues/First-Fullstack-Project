import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormProps } from "../types/registerFormProps";
import { useForm } from "react-hook-form";
import { registerSchemaForm } from "../schemas/registerSchema";

export const useRegisterForm = () => {
  
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<RegisterFormProps>({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    reValidateMode: "onChange",
    resolver: zodResolver(registerSchemaForm),
  });
  
  return {
    errors, isSubmitting, register, handleSubmit
  }
}

export default useForm