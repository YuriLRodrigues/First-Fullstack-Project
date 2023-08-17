import { z } from "zod";

export const newPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Campo nova senha deve conter no mínimo 6 dígitos"),
    newConfirmPassword: z
      .string()
      .min(
        6,
        "Campo nova confirmação de senha deve conter no mínimo 6 dígitos"
      ),
    email: z
      .string()
      .email("E-mail inválido")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "E-mail não permitido pelo regex"
      ),
  })
  .refine((fields) => fields.newPassword === fields.newConfirmPassword, {
    path: ["newConfirmPassword"],
    message: "As senhas não conferem",
  });