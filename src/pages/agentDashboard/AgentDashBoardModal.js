import React from "react";

const AgentDashBoardModal = () => {
  return (
    <section className="modal">
      <div className="modal-content">
        <div className="reportHeadingContainer">
          <p className="reportHeading">REPORT</p>
          <p className="reportID" id="uniqueReportId"></p>
          <a href="#" className="formButton close-button">
            Close
          </a>
        </div>
        <form>
          <div className="sourceAndDateReported">
            <div className="form-group">
              <label htmlFor="source">SOURCE</label>
              <p className="InputField" id="uniqueReportSource" />
            </div>
            <div className="form-group">
              <label htmlFor="dateReported">DATE REPORTED</label>
              <p className="InputField" id="uniqueReportDateAndTime" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="companyAnddOrgansitaion">
              COMPANY / ORGANISATION
            </label>
            <p className="InputField" id="uniquecompanyAnddOrgansitaion">
              COMPANY/ORGANISATION REPORTED
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <p className="InputField" id="uniquesubject">
              SUBJECT OF REPORT
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="textMessages">MESSAGE</label>
            <p className="InputField" id="uniquemessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              pariatur ipsam repellat, saepe nostrum dolor. Debitis odio, quos
              maxime ullam nam voluptatem fugit vel eligendi culpa, labore ipsam
              ad repellat repudiandae nobis tenetur porro eaque soluta? Maiores
              debitis aut, exercitationem tempore dignissimos voluptas
              molestias, optio, iste dolore amet ut nostrum!
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">ATTACHMENT</label>
            <div className="viewFileButtonContainer">
              <a href="#" className="formButton">
                VIEW FILES
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AgentDashBoardModal;