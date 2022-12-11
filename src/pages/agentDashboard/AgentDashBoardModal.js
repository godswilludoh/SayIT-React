import React, {useState, useEffect} from "react";
import style from '../agentDashboard/AgentDashboardModal.module.css'
// import { AgentReportServices } from "../../helper/context/agent-context/agentreport.service";
// import { useEffect } from 'react';

const AgentDashBoardModal = ({show, viewspecificAgencyReport, onClose}) => {
  // console.log(props.viewspecificAgencyReport)

  const {id, reportee, message, subject, userId, updatedAt,} = viewspecificAgencyReport

  // useEffect(() => {
  //   AgentReportServices.viewSpecificReportById().then((response) => {
  //     console.log("response", response.data);
  //     // setSpecificAgencyReport(response.data);
  //   });
  // }, []);

 


  if(!show){
    return null;
  }

  return (
    <section className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.reportHeadingContainer}>
          <p className={style.reportHeading}>REPORT</p>
          <p className={style.reportID}>{id} </p>
          <a href="#" 
          onClick={onClose}
          className={style.formButton}>
            Close
          </a>
        </div>
        <form>
          <div className={style.sourceAndDateReported}>
            <div className={style.formGroup}>
              <label htmlFor="source">SOURCE</label>
              <p className={style.InputField}>{userId}</p>
            </div>
            <div className={style.formGroup}>
              <label htmlFor="dateReported">DATE REPORTED</label>
              <p className={style.InputField}>{updatedAt}</p>
            </div>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="companyAnddOrgansitaion">
              COMPANY / ORGANISATION
            </label>
            <p className={style.InputField}>
              {reportee}
            </p>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="subject">SUBJECT</label>
            <p className={style.InputField}>
              {subject}
            </p>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="textMessages">MESSAGE</label>
            <p className={style.InputField} id="uniquemessage">
              {message}
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