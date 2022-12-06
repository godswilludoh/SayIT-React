import React from "react";
import style from '../agentDashboard/AgentDashboardModal.module.css'

const AgentDashBoardModal = (props) => {

  if(!props.show){
    return null;
  }

  return (
    <section className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.reportHeadingContainer}>
          <p className={style.reportHeading}>REPORT</p>
          <p className={style.reportID}> 001 </p>
          <a href="#" 
          onClick={props.onClose}
          className={style.formButton}>
            Close
          </a>
        </div>
        <form>
          <div className={style.sourceAndDateReported}>
            <div className={style.formGroup}>
              <label htmlFor="source">SOURCE</label>
              <p className={style.InputField}>Lameda</p>
            </div>
            {/* <div className={style.formGroup}>
              <label htmlFor="dateReported">DATE REPORTED</label>
              <p className={style.InputField}>Date Reported</p>
            </div> */}
          </div>
          <div className={style.formGroup}>
            <label htmlFor="companyAnddOrgansitaion">
              COMPANY / ORGANISATION
            </label>
            <p className={style.InputField}>
              COMPANY/ORGANISATION REPORTED
            </p>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="subject">SUBJECT</label>
            <p className={style.InputField}>
              SUBJECT OF REPORT
            </p>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="textMessages">MESSAGE</label>
            <p className={style.InputField} id="uniquemessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              pariatur ipsam repellat, saepe nostrum dolor. Debitis odio, quos
              maxime ullam nam voluptatem fugit vel eligendi culpa, labore ipsam
              ad repellat repudiandae nobis tenetur porro eaque soluta? Maiores
              debitis aut, exercitationem tempore dignissimos voluptas
              molestias, optio, iste dolore amet ut nostrum!
            </p>
          </div>
          <div className={style.formGroup}>
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