import React, { useState } from "react";
import "./AgentsLogin.css";
import styles from "./button.module.css";
import Navbar from "../../../components/nav/Navbar";
import { FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../components/hooks/useAuth";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const AgentsLogin = () => {
  const navigate = useNavigate();
  const { auth, setAuth, setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [Submitting, setSubmitting] = useState(false);

  const formsubmit = () => {
    setSubmitting(!Submitting);
  };

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

  const formik = useFormik({
    initialValues: {
      agentID: "",
      Password: "",
    },

    validationSchema: Yup.object({
      agentID: Yup.string().required("Required"),
      Password: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      const { agentID, Password } = values;

      

      // formsubmit(true);

      // setSubmitting(true);

      try {
        let response = await axios.post(
          "http://191.101.241.157:4500/v1/auth/login",
          {
            detail: agentID,
            password: Password,
          }
        );

        const accessToken = response.data.tokens.access.token;
        localStorage.setItem("accessToken", accessToken);
        const refreshToken = response.data.tokens.refresh.token;
        const userObj = response.data.user;
        console.log(values);
        console.log(userObj);
        console.log(response);
        console.log(accessToken);

        setAuth({ accessToken, refreshToken });
        setUser(userObj);
        loginSuccess();

        if (auth) {
          navigate("/agentDashboard");
          // toast.success("Log success!")
        }
      } catch (err) {
        if (!err.response) {
          loginFailed("no server response");
        } else if (err.response.status === 400) {
          loginFailed(err.response.message);
          toast.error("Wrong Inputs submitted!");
        } else if (err.response.status === 401) {
          loginFailed(err.response.message);
          toast.error("Unauthorized User!");
        } else {
          loginFailed("Login Failed");
        }
      }
    },
  });

  return (
    <div className="agentAndAdminContainer">
      <Navbar />

      <section className={styles.overallContainer}>
        <section className={styles.theLoginSide}>
          <div className="innerContainer">
            <h3 className={styles.agentTitle}>AGENT LOGIN</h3>
            <Formik>
              {({ values, isSubmitting }) => (
                <form id="agent-form" onSubmit={formik.handleSubmit}>
                  {/*FIELD FOR THE AGENT ID */}
                  <div className="formGroup">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        style={{ fill: "rgb(0,0,0)" }}
                      >
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="agentID"
                      // id="agentID"
                      placeholder="Agent ID"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.agentID}
                    />
                    {formik.touched.agentID && formik.errors.agentID ? (
                      <p className="errors">{formik.errors.agentID}</p>
                    ) : null}
                  </div>
                  {/*FIELD FOR THE AGENT PASSWORD*/}
                  <div className="formGroup">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        style={{ fill: "rgb(0,0,0)" }}
                      >
                        <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
                      </svg>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="Password"
                      id="agentpassword"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Password}
                    />
                    {formik.touched.Password && formik.errors.Password ? (
                      <p className="errors">{formik.errors.Password}</p>
                    ) : null}
                    <span className="passwordEyeIcon">
                      <FaRegEye onClick={togglePassword} />
                    </span>
                  </div>

                  <button type="submit" className="logInButton"
                  disabled={isSubmitting}>
                    LOGIN
                  </button>
                </form>
              )}
            </Formik>

            {/* <Footer /> */}
          </div>
        </section>
        <section className="theImageSide">
          <img
            src="/assets/SAYIT-removebg.png"
            alt="sayITimage"
            width="550px"
          />
        </section>
      </section>
    </div>
  );
};

export default AgentsLogin;
