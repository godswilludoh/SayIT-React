import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField";
import validationSchema from "./validationLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdditionalInfo from "./AdditionalInfo";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "../../../utility/api/axios";
import { useAuth } from "../../../components/hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LOGIN_URL = "/v1/auth/login";

const SignupForm = () => {
  const navigate = useNavigate();
  const { auth, setAuth, setUser } = useAuth();

  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/login";

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginSuccess = () => {
    toast.success("Login Successful!", { position: toast.POSITION.TOP_CENTER });
  };

  const loginFailed = (error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <div className="toast-notify">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

      <Formik
        initialValues={{
          detail: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { detail, password } = values;
          setSubmitting(true);
          try {
            let response = await axios.post(LOGIN_URL, {
              detail,
              password,
            });

            const accessToken = response.data.tokens.access.token;
            console.log(accessToken);
            localStorage.setItem("accessToken", accessToken);
            const refreshToken = response.data.tokens.refresh.token;

            const userObj = response.data.user;

            // localStorage.getItem("user"); no b here u suppose get
            localStorage.setItem("regUserObj", JSON.stringify(userObj));

            setAuth({ refreshToken });
            setUser(userObj);
            loginSuccess();

            if (auth) {
              navigate("/users");
            }
          } catch (err) {
            if (!err.response) {
              loginFailed("no server response");
            } else if (err.response.status === 400) {
              loginFailed(err.response.message);
            } else if (err.response.status === 401) {
              loginFailed(err.response.message);
            } else {
              loginFailed("Login Failed");
            }
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, formik }) => (
          <Form className="w-75">
            <TextField
              label="Username or Email"
              name="detail"
              type="text"
              placeholder="Enter Username or Email"
              onChange={handleChange}
              value={values.detail}
            />

            {/* <span className='toggle-password' onClick={togglePassword}>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</span> */}

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "password" : "password"}
              placeholder="Enter Password"
              onChange={handleChange}
              value={values.password}
            />

            <Link to={"/userforgotpassword"} className="forForgotPassword">
              FORGOT PASSWORD?
            </Link>

            <button
              id="createAccount"
              className="btn mt-3  text-white bg-info btn-outline-info center-block d-block mx-auto font-weight-bold"
              disabled={isSubmitting}
              type="submit"
              onClick={handleSubmit}
            >
              {isSubmitting ? "Logging In" : "Login"}
            </button>
          </Form>
        )}
      </Formik>
      <AdditionalInfo />
    </>
  );
};

export default SignupForm;
