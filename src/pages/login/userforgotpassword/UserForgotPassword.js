import React from "react";
import "./UserForgotPassword.css";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import SectionForImage from "./SectionForImage";
import SectionForForm from "./SectionForForm";

const UserForgotPassword = () => {
  return (
    <div className="boxWrapper">
      <Navbar />

      <section className="forgotpasswordSectionContainer">
        <SectionForForm />

        <SectionForImage />
      </section>

      <Footer />
    </div>
  );
};

export default UserForgotPassword;
