import React, { useEffect, useState } from "react";
import "./adminprofile.css";
import { toast, Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik, yupToFormErrors } from "formik";
import userEvent from "@testing-library/user-event";
import axios from "axios";
// import * as Yup from "yup";

export const AdminprofileForm = () => {
  const formik = useFormik({
    initialValues: {
      Username: "",
      Email: "",
      Password: "",
      Phone: "",
      ID: "",
      Role: "",
    },

    // @THEO LINK THE SUBMITTED INFO TO BACKEND
    onSubmit: (values) => {
      // console.log(values);
      toast.success("Profile updated successfully!");
      // position: toast.POSITION.TOP_CENTER,
    },
  });

  const [admininfo, setAdminInfo] = useState([])

  useEffect(() => {
    axios.get("http://191.101.241.157:4500/v1/auth/current-user",   {headers: {
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`
        }})
    .then((response) => {
      let Result = response.data
    
      setAdminInfo(Result);
      console.log(Result)
      
    });
  }, []);

  //   const submitUserInfo = asyc () => {

  //   }

  return (
    // <React.Fragment>
    <div className="main-details-container">
      <div className="acct-into">
        <div>
          {admininfo.map((admininfo) => (
            <h3> Welcome {admininfo.username} </h3>
          ))}
        </div>
        <div>
          {admininfo.map((admininfo) => (
            <p>{admininfo.email}</p>
          ))}
        </div>
      </div>

      <div className="acct-info">
        <h5>Account</h5>
        <form >
            
          <div>
            <div className="details_Info">
              <label htmlFor="Username"> Username </label>
              {admininfo.map((admininfo) => (
                <input readOnly type="text" placeholder={admininfo.username} />
              ))}
            </div>
            <div className="details_Info">
              <label htmlFor="email"> Email </label>
              {admininfo.map((admininfo) => (
                <input readOnly type="text" placeholder={admininfo.email} />
              ))}
            </div>
            <div className="details_Info">
              <label htmlFor="Password"> Password </label>
             
                <input readOnly type="password" placeholder="********" />

            </div>
            <div className="details_Info">
              <label htmlFor="password"> Phone </label>
              {admininfo.map((admininfo) => (
                <input readOnly type="text" placeholder={admininfo.phone} />
              ))}
            </div>

            <div className="details_Info">
              <label htmlFor="names"> ID </label>
              {admininfo.map((admininfo) => (
                <input readOnly type="text" placeholder={admininfo.id} />
              ))}
            </div>
            <div className="details_Info">
              <label htmlFor="Role"> Role </label>
              {admininfo.map((admininfo) => (
                <input readOnly type="text" placeholder={admininfo.role} />
              ))}
            </div>
          </div>
          <button type="submit" id="prof-btn" disabled>
            {" "}
            OK{" "}
          </button>
        </form>
      </div>
    </div>
    // </React.Fragment>
  );
};
