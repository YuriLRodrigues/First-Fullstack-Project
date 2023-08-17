import { zodResolver } from "@hookform/resolvers/zod";
import { deleteSchema } from "../schemas/deleteSchema";
import { useForm } from "react-hook-form";

const useDeleteForm = () => {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(deleteSchema),
  })
  
  return {
    register, handleSubmit, errors, isSubmitting
  }
}

export default useDeleteForm