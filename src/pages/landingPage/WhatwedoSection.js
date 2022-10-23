import React from 'react'
import { Link } from "react-router-dom";

const WhatwedoSection = () => {
  return (
    <section className="whatWedo">
        <h2 className="whatWeDoHeading">WHAT WE DO</h2>
        <p className="whatWeDoParagraph">
          SayIT Whistleblowing Application is a web based application that helps
          increase transparency and accountability in the society.The platform
          provides a means for users to report cases both anonymously or
          creating an account so as to track their report status.
          <br />
          The reports made are passed to agents that partner with the platform.
        </p>
        <div className="whatWedoButton">
          <Link to={"/signup"} className="btn">Create Account</Link>
          <Link to={"/report"} className="btn">
            REPORT ANONYMOUSLY
          </Link>
        </div>
      </section>
  )
}

export default WhatwedoSection;
