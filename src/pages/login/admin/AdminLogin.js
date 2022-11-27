import React, {useState} from "react";
import "./../agents/AgentsLogin.css";
import styles from "./../agents//button.module.css";
import { toast, Toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useAuth } from '../../../components/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../../components/nav/Navbar";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const AdminLogin = () => {
  const navigate = useNavigate();
	const { auth, setAuth, setUser } = useAuth();
  
  const loginSuccess = () => {
		toast.success('Successful Login!', { position: toast.POSITION.TOP_CENTER });
	};

	const loginFailed = (error) => {
		toast.error(error, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

  const formik = useFormik({
    initialValues: {
      adminID: "",
      Password: "",
    },
    
    validationSchema: Yup.object({
      adminID: Yup.string().max(16, "*Should be less than 16 characters").required("*Cannot be empty"),
      Password: Yup.string().required("*Please enter your password"),
      
    }),
    
 // @THEO LINK THE SUBMITTED INFO TO BACKEND
    
 onSubmit: async (values, Action) => { 
  // console.log(values);
  const { detail, password} = values;

  try{
    let response = await axios.post(
      'https://say--it.herokuapp.com/v1/auth/login',
      {
        detail,
        password,
      },
    
  
    );
    const accessToken = response.data.tokens.access.token;
    const refreshToken = response.data.tokens.refresh.token;
    const userObj = response.data.user;

    setAuth({ accessToken, refreshToken });
    setUser(userObj);
    loginSuccess();

    if (auth) {
      navigate('/adminDashboard');
    }
  } catch (err) {
    if (!err.response) {
      loginFailed('no server response');
    } else if (err.response.status === 400) {
      loginFailed(err.response.message);
    } else if (err.response.status === 401) {
      loginFailed(err.response.message);
    } else {
      loginFailed('Login Failed');
    }
  }
}}
    // toast.success("Welcome Admin")
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // Action.resetForm(); 
    // },

  )
  
// }
  return (
    <div className="agentAndAdminContainer">
      <Navbar />
      <section className={styles.overallContainer}>
        <section className="theLoginSide">
          <div className="innerContainer">
            <h3 className="agentTitle">ADMIN LOGIN</h3>
            <Formik>

            {({ values, handleChange, handleSubmit, isSubmitting, }) => (          
            <form id="agent-form" onSubmit={formik.handleSubmit} >
              {/*FIELD FOR THE AGENT ID */}
              <div className="formGroup">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    style={{ fill: "rgb(137, 134, 133)" }}
                  >
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  name="adminID"
                  id="agentID"
                  placeholder="Admin ID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value = {formik.values.adminID}
                  
                  />
                  {formik.touched.adminID && formik.errors.adminID ? <p className= "errors">{formik.errors.adminID }</p> : null }
              </div>
              {/*FIELD FOR THE AGENT PASSWORD*/}
              <div className="formGroup">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    style={{ fill: "rgb(137, 134, 133)" }}
                  >
                    <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  name="Password"
                  id="agentpassword"
                  placeholder="Password"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value = {formik.values.Password}
                  />
                  {formik.touched.Password && formik.errors.Password ? <p className= "errors">{formik.errors.Password }</p> : null }
              </div>
              <div>
                <button type="submit" className="logInButton" disabled ={isSubmitting} >LOGIN</button>
              </div>
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

export default AdminLogin;
