import React from "react";

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /> */}
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <section className="frequentlyAskedQuestion">
        <h2 className="frequentlyAskedQtnHeading">
          FREQUENTLY ASKED QUESTIONS (FAQ's)
        </h2>

        <section className="containerHousingAccordion">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              WHY SHOULD I USE SayIT?
            </AccordionHeader>
            <AccordionBody>
              This website uses state of the art security software to anonymize
              your internet connection as you submit files or correspond with
              reporters. This way your identity is protected both from the
              reporters who receive the files and from others who might be
              monitoring or intercepting your communications.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              DOES SUBMISSION INVOLVES DANGER?
            </AccordionHeader>
            <AccordionBody>
              Sharing confidential information is never without risk. SayIT will
              try, as much as possible, to protect your communication and to
              provide information about the risks. The system makes finding the
              source of a leak difficult. Our receivers are journalists that
              have been trained in the use of state-of-the-art security tools
              and procedures.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              HOW ARE AGENTS SELECTED?
            </AccordionHeader>
            <AccordionBody>
              Sharing confidential information is never without risk. SayIT will
              try, as much as possible, to protect your communication and to
              provide information about the risks. The system makes finding the
              source of a leak difficult. Our receivers are journalists that
              have been trained in the use of state-of-the-art security tools
              and procedures.
            </AccordionBody>
          </Accordion>
        </section>
      </section>
    </Fragment>
  );
}
