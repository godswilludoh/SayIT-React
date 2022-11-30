import React from "react";
import { formik, useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import style from "../AdminDashboard/AdminAgentModal.module.css";
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const AdminAgentModal = (props) => {



  const navigate = useNavigate();


  const showAlert = () => {
		swal(
			'Agency successfully onboarderd',
			'success'
		);
	};

  const showFailedAlert = () => {
    {
      swal(
        "Error",
        "Unable to create new agency record at the moment please try again later",
        "error"
      );
    }
    setTimeout(() => {
      navigate("/admindashboard");
    }, 5000);
  };







  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      phoneNumber: "",
      otherphoneNumber: "", //not needed
      // gender: false, // added for our checkbox
      name: "", // agency name
      address: "", //agencyadress
      sector: "",
      regNumber: "", //agencyregistrationnumber
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Email is invalid").required("Required"),
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .max(11, "Must be 11 numbers")
        .required("Required"),
      name: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      sector: Yup.string().required("Required"),
      regNumber: Yup.string()
        .max(11, "Must be 11 numbers")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      // console.log(values);

      const {
        firstName,
        lastName,
        email,
        userName,
        phoneNumber,
        name,
        address,
        sector,
        regNumber,
      } = values;


      const agencyRegDetails = {
        firstName,
        lastName,
        email,
        userName,
        name,
        phoneNumber,
        address,
        sector,
        regNumber
      };
      // console.log(agencyRegDetails);

      // Post data to the backend
      try {
        let response = await axios.post(
          "https://say--it.herokuapp.com/v1/agency",
          agencyRegDetails,{headers: {
            Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }},
        );
        console.log(response.data)
        showAlert();

      } catch (error) {
        console.log(error);
        showFailedAlert();
      }
    },



  });

  if (!props.show) {
    return null;
  }

  return (
    <div className={style.popModal}>
      <div className={style.popModalContent}>
        <h2 className={style.registrationTitle}>Registration Form</h2>
        <section className={style.agentPersonalInformation}>
          <form onSubmit={formik.handleSubmit}>
            {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}
            {/* code above helps preview the values in the form and der corresponding error */}
            <section>
              <h3 className={style.foragentPersonalTitle}>
                1. Personel Information
              </h3>
              <div className={style.firstRow}>
                <div>
                  <h3 className={style.formTitle}>First Name</h3>
                  <div className={style.formGroupForOBD}>
                    <input
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      className={style.strictlyForAgent}
                      // type="text"
                      placeholder="enter agent first name"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <p className={style.errors}>{formik.errors.firstName}</p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <h3 className={style.formTitle}>Last Name</h3>
                  <div className={style.formGroupForOBD}>
                    <input
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      className={style.strictlyForAgent}
                      type="text"
                      placeholder="enter agent last name"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <p className={style.errors}>{formik.errors.lastName}</p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <h3 className={style.formTitle}>Email</h3>
                  <div className={style.formGroupForOBD}>
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={style.strictlyForAgent}
                      type="email"
                      placeholder="enter agent email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className={style.errors}>{formik.errors.email}</p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <h3 className={style.formTitle}>User Name</h3>
                  <div className={style.formGroupForOBD}>
                    <input
                      name="userName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.userName}
                      className={style.strictlyForAgent}
                      type="text"
                      placeholder="enter agent user name"
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                      <p className={style.errors}>{formik.errors.userName}</p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <h3 className={style.formTitle}>Phone Number</h3>
                  <div className={style.formGroupForOBD}>
                    <input
                      name="phoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                      className={style.strictlyForAgent}
                      type="text"
                      placeholder="enter agent phone number"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <p className={style.errors}>
                        {formik.errors.phoneNumber}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <h3 className={style.formTitle}>Other Phone Number</h3>
                  <div className={style.formGroupForOBD}>
                    <input
                      name="otherphoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.otherphoneNumber}
                      className={style.strictlyForAgent}
                      type="text"
                      placeholder="enter other phone number"
                    />
                    {formik.touched.otherphoneNumber &&
                    formik.errors.otherphoneNumber ? (
                      <p className={style.errors}>
                        {formik.errors.otherphoneNumber}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <section className="checkBox">
                <h3 className={style.checkBoxHeading}>Gender</h3>
                <div className={style.checkBoxes}>
                  <div className={style.checkBoxContainer}>
                    <label htmlFor="checkbox">
                      <input
                        className={style.inputBorderColor}
                        type="checkbox"
                      />
                    </label>
                    <p className={style.checboxOption}>Male</p>
                  </div>
                  <div className={style.checkBoxContainer}>
                    <label htmlFor="checkbox">
                      <input
                        className={style.inputBorderColor}
                        type="checkbox"
                      />
                    </label>
                    <p className={style.checboxOption}>Female</p>
                  </div>
                </div>
              </section>
            </section>
            <section className={style.agencyPersonalInformation}>
              <section>
                <h3 className={style.foragentPersonalTitle}>
                  2. Agency Information
                </h3>
              </section>
              <div className={style.forEachAgencyInfoField}>
                <h3 className={style.formTitle}>Agency Name</h3>
                <div className={style.section2InputField}>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type="text"
                    placeholder="enter agency name"
                    name="name"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p className={style.errors}>{formik.errors.name}</p>
                  ) : null}
                </div>
              </div>
              <div className={style.forEachAgencyInfoField}>
                <h3 className={style.formTitle}>Agency Address</h3>
                <div className={style.section2InputField}>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    // type="text"
                    placeholder="enter agency address"
                    name="address"
                    type="text"
                  />
                  {formik.touched.name && formik.errors.address ? (
                    <p className={style.errors}>{formik.errors.address}</p>
                  ) : null}
                </div>
              </div>
              <div className={style.forEachAgencyInfoField}>
                <h3 className={style.formTitle}>Agency Sector</h3>
                <div className={style.section2InputField}>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sector}
                    type="text"
                    placeholder="enter agency sector"
                    name="sector"
                  />
                  {formik.touched.sector && formik.errors.sector ? (
                    <p className={style.errors}>{formik.errors.sector}</p>
                  ) : null}
                </div>
              </div>

              <div className={style.forAgentRegPhoneEmail}>
                <div className="forEachAgencyInfoField">
                  <h3 className={style.formTitle}>Agency Registration No</h3>
                  <div className={style.section2InputField}>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.regNumber}
                      type="text"
                      placeholder="enter agency registration number"
                      name="regNumber"
                    />
                    {formik.touched.regNumber && formik.errors.regNumber ? (
                      <p className={style.errors}>{formik.errors.regNumber}</p>
                    ) : null}
                  </div>
                </div>

                <div className={style.forEachAgencyInfoField}>
                  <h3 className={style.formTitle}>Agency Phone Number</h3>
                  <div className={style.section2InputField}>
                    <input
                      type="text"
                      placeholder="enter agency phone number"
                      // id="name"
                    />
                  </div>
                </div>

                <div className={style.forEachAgencyInfoField}>
                  <h3 className={style.formTitle}>Email</h3>
                  <div className={style.section2InputField}>
                    <input
                      type="email"
                      placeholder="enter agency mail"
                      // id="name"
                    />
                  </div>
                </div>
              </div>
              <div className={style.agenyLogo}>
                <label className={style.formTitle} htmlFor="agencylogo">
                  Upload Company Logo
                </label>
                <div>
                  <input type="file" />
                </div>
              </div>
              <div className={style.forSubmittingAgent_Agency}>
                <button
                type="submit" className={style.forSubmittingTheForm}>
                  submit
                </button>



                <div>
                  <button
                    type="button"
                    onClick={props.onClose}
                    className={style.forClosingTheForm}
                  >
                    Close
                  </button>
                </div>
              </div>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdminAgentModal;
