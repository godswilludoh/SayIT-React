import React from 'react'
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import { Form } from 'react-router-dom';
import './Contact.css'
import SignupImg from '../../assets/createAccount.png';
import { useFormik } from 'formik';
import * as Yup from "yup";
import swal from 'sweetalert';

export const ContantUs = () => {
const formik = useFormik({
    initialValues: {
        Name: "",
        Email: "",
        Subject: "",
        Details: "",
    },
    validationSchema: Yup.object({
        Name: Yup.string().required("*Required"),
        Email: Yup.string().email( "*Invalid email").required("*Required"),
        Subject: Yup.string().max(20, "*20 characters max!").required("*Required"),
        Details: Yup.string().max(200, "*200 characters max!").required("*Required"),
    }),

    // LINK BACKEND END POINT FOR CORRECT SWEET ALERT
    onSubmit: async(values, Action)=>{
        // console.log(values)
        

        swal({
            title: "Thank you for your feedBack!",
            text: "Recorded",
            icon: "success",
            button: "close"
        })
      
        await new Promise((resolve) => setTimeout(resolve, 2000));
        Action.resetForm()
    }
})

  return (
    <>
        <div>
			<Navbar />
        </div>
        <div>
            <div id='contant-head'>
                <h2 >
                    CONTACT US
                </h2>
                <h5>
                    Let us know how we can help. <br/>
                    For further information, contact us.
                </h5>
            </div>
           <div className='Contact-display'>
            <section>
                <form onSubmit={formik.handleSubmit}>
                    <div className='Form-contain'>
                        <div className="details_Info">
                            <label htmlFor='Name'> Name </label>
                            <input type="text"
                            placeholder = "Full Names"
                            className='cont-forms'
                            name = "Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value = {formik.values.Name}
                            />
                         {formik.touched.Name && formik.errors.Name ? 
                         <p className= "errors">{formik.errors.Name }</p> : null }
                        
                        </div>
                        <div className="details_Info">
                            <label  htmlFor='Email'>Email</label>
                            <input type="email"
                            placeholder = "Email"
                            className='cont-forms'
                            name = "Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value = {formik.values.Email}
                            />
                         {formik.touched.Email && formik.errors.Email ? 
                         <p className= "errors">{formik.errors.Email }</p> : null }
                    
                        
                        </div>
                        <div className="details_Info">
                            <label  htmlFor='Subject'>Subject</label>
                            <input type="text"
                            placeholder = "Subject of message"
                            className='cont-forms'
                            name = "Subject"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value = {formik.values.Subject}
                            />
                         {formik.touched.Subject && formik.errors.Subject? 
                         <p className= "errors">{formik.errors.Subject }</p> : null }
                        
                        
                        </div>
                        <div className="details_Info">
                            <label  htmlFor='Details'>Details</label>
                            <textarea type= "text"
                            placeholder = "Leave a message..."
                            id='details-input'
                            name = "Details"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value = {formik.values.Details}
                            />
                         {formik.touched.Details && formik.errors.Details ? 
                         <p className= "errors">{formik.errors.Details }</p> : null }
                        
                        </div>
                        <button type='Submit' id='cont-btn'> Submit </button>
                     </div>
                 </form>
              </section>
            <section>
                <div className='signup-img-side'>
                <img
					className='img-siide'
					src={SignupImg}
					alt='signup img'
						/>
                </div>
            </section>
			</div>
        </div>
      <Footer /> 
    </>		
  );
}
