import React from "react";

const Faq = () => {
  return (
    <section className="frequentlyAskedQuestion">
      <h2 className="frequentlyAskedQtnHeading">
        FREQUENTLY ASKED QUESTIONS (FAQ's)
      </h2>
      <section className="containerHousingAccordion">
        <button className="accordion">WHY SHOULD I USE SayIT?</button>
        <div className="panel">
          <p>
            This website uses state of the art security software to anonymize
            your internet connection as you submit files or correspond with
            reporters. This way your identity is protected both from the
            reporters who receive the files and from others who might be
            monitoring or intercepting your communications.
          </p>
        </div>
        <button className="accordion">DOES SUBMISSION INVOLVES DANGER?</button>
        <div className="panel">
          <p>
            Sharing confidential information is never without risk. SayIT will
            try, as much as possible, to protect your communication and to
            provide information about the risks. The system makes finding the
            source of a leak difficult. Our receivers are journalists that have
            been trained in the use of state-of-the-art security tools and
            procedures.
          </p>
        </div>
        <button className="accordion">HOW ARE AGENTS SELECTED?</button>
        <div className="panel">
          <p>
            Sharing confidential information is never without risk. SayIT will
            try, as much as possible, to protect your communication and to
            provide information about the risks. The system makes finding the
            source of a leak difficult. Our receivers are journalists that have
            been trained in the use of state-of-the-art security tools and
            procedures.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Faq;