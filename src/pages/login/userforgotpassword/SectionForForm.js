import React from "react";
import { Link } from "react-router-dom";

const SectionForForm = () => {
  return (
    <section className="sectionForForm">
      <p className="forTheGoBackToLoginArrow" href="#">
        <i className="fa fa-arrow-left" aria-hidden="true" />
        Back to
        <Link to={"/login"} className="seprateText">
          {" "}
          LOGIN
        </Link>
      </p>
      <h4 className="resetPasswordHeading">RESET PASSWORD</h4>
      <p className="resetPasswordParagraph">Did you forget your password?</p>
      <p className="resetPasswordParagraph2">
        Enter your Username or phone number used during the registration
      </p>
      <input
        id="resetInputFeild"
        type="text"
        placeholder="Username or phone  number"
      />
      <button id="resetButton">RESET</button>
      <p className="dontHaveAnAccountText">
        Dont have an account?{" "}
        <Link to={"/signup"} className="seprateText">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default SectionForForm;
