import "./home.sass";
import { RegisterFormProps } from "../../types/registerFormProps";
import { useRegisterForm } from "../../customHooks/useRegisterForm";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { errors, handleSubmit, isSubmitting, register } = useRegisterForm();
  const navigate = useNavigate();

  const fetchRegisterUser = async (data: RegisterFormProps) => {
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
      return result

    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (data: RegisterFormProps) => {
    console.log(data);
    await fetchRegisterUser(data);
    setTimeout(() => {
      navigate('/userlist')
    }, 2000);
  };

  return (
    <>
      <div className="form-container">
        <h2 className="register-title">Form Register</h2>
        <form
          className="form-register"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <input
            {...register("firstName")}
            autoComplete="off"
            type="text"
            placeholder="Primeiro nome"
          />
          {errors.firstName && (
            <span className="errors">{errors.firstName.message}</span>
          )}

          <input
            {...register("lastName")}
            autoComplete="off"
            type="text"
            placeholder="Último nome"
          />
          {errors.lastName && (
            <span className="errors">{errors.lastName.message}</span>
          )}

          <input
            {...register("email")}
            autoComplete="off"
            type="email"
            placeholder="E-mail"
          />
          {errors.email && (
            <span className="errors">{errors.email.message}</span>
          )}

          <input
            {...register("password")}
            autoComplete="off"
            type="password"
            placeholder="Senha"
          />
          {errors.password && (
            <span className="errors">{errors.password.message}</span>
          )}

          <input
            {...register("confirmPassword")}
            autoComplete="off"
            type="password"
            placeholder="Confirme sua senha"
          />
          {errors.confirmPassword && (
            <span className="errors">{errors.confirmPassword.message}</span>
          )}

          <button type="submit">{isSubmitting ? "Enviando" : "Enviar"}</button>
        </form>
      </div>
    </>
  );
};
