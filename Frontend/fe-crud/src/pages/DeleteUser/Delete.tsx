import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { DeleteFormProps } from "../../types/deleteFormProps";
import { deleteUser } from "../../api/deleteUser";
import useDeleteForm from "../../customHooks/useDeleteForm";
import {ToastContainer} from 'react-toastify'
import { errorNotify, successNotify } from "../../utils/notify";

const Delete = () => {
  const {errors, handleSubmit, isSubmitting, register} = useDeleteForm()

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleDeleteForm = async (data: DeleteFormProps) => {
    const user = await deleteUser(data);
    if (user !== null) {
      successNotify("User deleted successfully")
      setTimeout(() => {
        setLoading(!loading);
        navigate('/userlist')
      }, 3000);
      return
    }
    errorNotify("User not found")
  };

  return (
    <>
      <div className="form-container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h2 className="register-title">Form Delete</h2>
            <ToastContainer />
            <form
              className="form-register"
              onSubmit={handleSubmit(handleDeleteForm)}
            >
              <input
                {...register("firstName")}
                autoComplete="off"
                type="text"
                placeholder="Primeiro nome"
              />
              {errors.firstName && (
                <span className="error-message">
                  {errors.firstName.message}
                </span>
              )}

              <input
                {...register("password")}
                autoComplete="off"
                type="password"
                placeholder="Senha"
              />
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}

              <input
                {...register("email")}
                autoComplete="off"
                type="email"
                placeholder="E-mail"
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}

              <button type="submit">
                {isSubmitting ? "Deletando" : "Deletar"}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Delete;
