import { z } from "zod";

export const registerSchemaForm = z.object({
  email: z.string().email('E-mail inválido').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'E-mail não permitido pelo regex'),
  password: z.string().min(6, 'Senha precisa ter no mínimo 6 caracteres'),
  firstName: z.string().min(3, 'Nome precisa ter no mínimo 3 caracteres'),
  lastName: z.string().min(3, 'Sobrenome precisa ter no mínimo 3 caracteres'),
  confirmPassword: z.string(),
}).refine((fields)=> fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não conferem'
});