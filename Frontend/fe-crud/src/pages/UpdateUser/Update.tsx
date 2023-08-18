import { useState } from "react";
import { updateUser } from "../../api/updateUser";
import { useUpdateForm } from "../../customHooks/useUpdateForm";
import { newPasswordProps } from "../../types/updateFormProps";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {errorNotify, sucessNotify} from '../../utils/notify'

const Update = () => {
  const { errors, handleSubmit, isSubmitting, register } = useUpdateForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleFormSubmit = (data: newPasswordProps) => {
    updateUser(data)
    setLoading(!loading);
    setTimeout(() => {
      navigate('/userlist');
    }, 2000);
  };

  return (
    <div className="form-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="register-title">Update Password</h2>
          <ToastContainer />
          <form
            className="form-register"
            onSubmit={handleSubmit(handleFormSubmit)}
            autoComplete="off"
          >
            <input
              {...register("email")}
              type="email"
              placeholder="Informe o seu e-mail"
              autoComplete="off"
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}

            <input
              {...register("newPassword")}
              type="password"
              placeholder="Informe a nova senha"
              autoComplete="off"
            />
            {errors.newPassword && (
              <span className="error-message">
                {errors.newPassword.message}
              </span>
            )}

            <input
              {...register("newConfirmPassword")}
              type="password"
              placeholder="Informe a nova senha"
            />
            {errors.newConfirmPassword && (
              <span className="error-message">
                {errors.newConfirmPassword.message}
              </span>
            )}

            <button type="submit">
              {isSubmitting ? "Enviando" : "Enviar"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Update;
