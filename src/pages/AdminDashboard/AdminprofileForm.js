import React, { useEffect, useState } from "react";
import "./adminprofile.css";
import { toast, Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik, yupToFormErrors } from "formik";
import userEvent from "@testing-library/user-event";
import axios from "axios";
// import * as Yup from "yup";

export const  AdminprofileForm = () => {
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
      // toast.success("Profile updated successfully!");
      // position: toast.POSITION.TOP_CENTER,
    },
  });

  const [admininfo, setAdminInfo] = useState([])

  useEffect(() => {
    axios.get("https://say-it-production.up.railway.app/v1/auth/current-user",   {headers: {
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
      <div className="acct-intro">
        <div>
          {/* {admininfo.map((admininfo) => ( */}
            <h3>Welcome {admininfo.userName}</h3>
          {/* ))} */}
        </div>
        <div>
          
            <p>{admininfo.email}</p>
         
        </div>
      </div>

      <div className="acct-info">
        <h5>Account</h5>
        <form >
            
          <div>
            <div className="details_Info">
              <label htmlFor="Username"> Username </label>
              
                <input readOnly type="text" className="profile-input" placeholder={admininfo.userName} />
           
            </div>
            <div className="details_Info">
              <label htmlFor="email"> Email </label>
             
                <input readOnly type="text" className="profile-input" placeholder={admininfo.email} />
            
            </div>
            <div className="details_Info">
              <label htmlFor="Password"> Password </label>
             
                <input readOnly type="password" className="profile-input" placeholder="********" />

            </div>
            <div className="details_Info">
              <label htmlFor="password"> Phone </label>
            
                <input readOnly type="text" className="profile-input" placeholder={admininfo.phoneNumber} />
            
            </div>

            <div className="details_Info">
              <label htmlFor="names"> ID </label>
             
                <input readOnly type="text" className="profile-input" placeholder={admininfo.id} />
            
            </div>
            <div className="details_Info">
              <label htmlFor="Role"> Role </label>
             
                <input readOnly type="text" className="profile-input" placeholder={admininfo.role} />
              
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
