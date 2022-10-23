import React from "react";

const HowitworksSection = () => {
  return (
    <section className="howITWOrks" id="howItWorks">
      <h2 className="howITWorksHeading">HOW IT WORKS</h2>
      <div className="imageContainerHowItWork">
        <div className="imageForMan">
          {/* image has been rendered in the .css file */}
        </div>
        <section className="stepbyStepApproachContainer">
          <h2 className="stepBystepHeading">Step by Step Approach</h2>
          <ul className="listContainer">
            <li>1.) Create an account / Use anonymously</li>
            <li>2.) Click on make a report</li>
            <li>3.) Choose sector of Industry you wish to report</li>
            <li>4.)Choose agency you wish to report to</li>
            <li>5.) Upload proof for authenticity</li>
            <li>6.) Submit Report</li>
            <li>7.) Get update of reports</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default HowitworksSection;
