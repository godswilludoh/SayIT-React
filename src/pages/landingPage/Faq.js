import Accordion from "react-bootstrap/Accordion";

// import "./landing.css";

function Faq() {
  return (
    <>
      <section className="frequentlyAskedQuestion">
      <h2 className="frequentlyAskedQtnHeading">
          FREQUENTLY ASKED QUESTIONS (FAQ's)
        </h2>


        <section className="containerHousingAccordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordionHeader">WHY SHOULD I USE SayIT?</Accordion.Header>
              <Accordion.Body>
              This website uses state of the art security software to anonymize
              your internet connection as you submit files or correspond with
              reporters. This way your identity is protected both from the
              reporters who receive the files and from others who might be
              monitoring or intercepting your communications.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">DOES SUBMISSION INVOLVES DANGER?</Accordion.Header>
              <Accordion.Body>
              Sharing confidential information is never without risk. SayIT will
              try, as much as possible, to protect your communication and to
              provide information about the risks. The system makes finding the
              source of a leak difficult. Our receivers are journalists that
              have been trained in the use of state-of-the-art security tools
              and procedures.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordionHeader">HOW ARE AGENTS SELECTED?</Accordion.Header>
              <Accordion.Body>
              Every onboarded agent are subjected to proper scrutinization to ensure that agents onboarded are of legtimate status, so as not to give room for fraudulence activity by fraudsters on the SayIT platform
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </section>
    </>
  );
}

export default Faq;
