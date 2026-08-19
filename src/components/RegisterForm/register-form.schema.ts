import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
  .object({
    firstName: z.string().min(1, "Primeiro nome é obrigatório").trim(),

    lastName: z.string().min(1, "Último nome é obrigatório").trim(),

    email: z.email("E-mail inválido"),

    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),

    confirmPassword: z.string().min(1, "A confirmação de senha é obrigatória"),

    cpf: z
      .string()
      .min(1, "CPF é obrigatório")
      .refine((cpf) => isValidCPF(cpf), {
        message: "CPF inválido",
      }),

    birthDate: z
      .string()
      .min(1, "Data de nascimento é obrigatória")
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Data de nascimento inválida",
      }),

    cellphone: z.string().min(1, "Telefone é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
}
