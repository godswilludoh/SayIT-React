import React from 'react'
import './adminprofile.css';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from "yup";

export const AdminprofileForm = () => {
    const formik = useFormik({
        initialValues: {
            Username: "",
            Email: "",
            Password: "",
            ConfirmPass: "",
            FullName: "",
            Title : "",
        },
        validationSchema: Yup.object({
            Username: Yup.string().max(15, "should be 15 characters or less").required("Required"),
            Email: Yup.string().email( "Invalid email").required("Required"),
            Password: Yup.string()
                 .required('Please Enter your password')
                 .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
            ConfirmPass: Yup.string()
                .oneOf([Yup.ref('Password'), null], 'Passwords must match'),
            FullName: Yup.string().required("Required"),    
            Title: Yup.string().required("Required"),    

        }),

        // @THEO LINK THE SUBMITTED INFO TO BACKEND
        onSubmit: (values) =>{
            console.log(values);
        },
    })



  return (
    <div className="main-details-container">
    <div className="acct-into">
        <h3>Welcome Theodora-Admin002</h3>
        <p>whackytheo@sayit.org</p>
    </div> 
    <div className="acct-info">
        <h5>Account</h5>
        <form onSubmit={formik.handleSubmit}>
            <div className="details_Info">
                <label htmlFor="Username"> Username </label>
                <input type="text" placeholder="Username"
                 name ="Username" 
                className="info-placehold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value = {formik.values.Username}
                />
                {formik.touched.Username && formik.errors.Username ? <p className= "errors">{formik.errors.Username }</p> : null }
            </div>
            <div className="details_Info">
                <label htmlFor="email"> Email </label>
                <input type="text" placeholder="example@email.com"
                 name ="Email" 
                 className="info-placehold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value = {formik.values.Email}
                />
                {formik.touched.Email && formik.errors.Email ? <p className= "errors">{formik.errors.Email }</p> : null }
            </div>
            <div className="details_Info">
                <label htmlFor="Password"> Password </label>
                <input type="password" placeholder="****"
                 name ="Password" 
                 className="info-placehold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value = {formik.values.Password}
                />
                {formik.touched.Password && formik.errors.Password ? <p className= "errors">{formik.errors.Password }</p> : null }
            </div>
            <div className="details_Info">
                <label htmlFor="password"> Confirm Password</label>
                <input type="password" placeholder="****"
                 name ="ConfirmPass" 
                 className="info-placehold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value = {formik.values.ConfirmPass}
                />
                 {formik.touched.ConfirmPass && formik.errors.ConfirmPass? <p className= "errors">{formik.errors.ConfirmPass }</p> : null }
            </div>
            <div className="details_Info">
                <label htmlFor="names"> Full Name </label>
                <input type="text" placeholder="Names"
                 name ="FullName" 
                 className="info-placehold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value = {formik.values.FullName}
                />
                {formik.touched.Names && formik.errors.Username ? <p className = "errors">{formik.errors.Nneome }</p> : null }
            </div>
            <div className="details_Info">
                <label htmlFor="Title"> Title </label>
                <input type="text" placeholder="Title"
                 name ="Title" 
                className="info-placehold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value = {formik.values.Title}
                />
                {formik.touched.Title && formik.errors.Title ? <p className= "errors">{formik.errors.Title }</p> : null }
            </div>

            <button type='submit' id='prof-btn'> Save </button>

        </form>

</div>
</div>
  )
}
