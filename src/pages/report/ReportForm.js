import React, { useState, useEffect } from "react";
import {
  Formik,
  Form,
  useField,
  FormikProvider,
  ErrorMessage,
  validateYupSchema,
} from "formik";
import * as Yup from "yup";
import Navbar from "../../components/nav/Navbar";
import "./report.css";
import { upload } from "@testing-library/user-event/dist/upload";
import { MySelect } from "../../components/reportFormFields/MySelect";
import { MyCheckbox } from "../../components/reportFormFields/MyCheckbox";
import { MyTextInput } from "../../components/reportFormFields/MyTextInput";
import { MyTextArea } from "../../components/reportFormFields/MyTextArea";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadRegisteredAgent } from "../../helper/context/agent-context/agentreport.service";

// And now we can use these
export const ReportForm = () => {

  const [allAgency, setAllAgency] = useState([]);

  // MADE USE OF THE GET ALL AGENCY END POIT HERE SO THAT WE CAN EXTRACT THE AGENCY NAMES
  useEffect(()=>{
    loadRegisteredAgent().then((response) => {
      // console.log("response", response.data);
      setAllAgency(response.data)
    })
    }, []);

    console.log(allAgency)

    // MAPPED THROUGHT ALL OF THE AGENCY OBJECT TO EXTRACT THE NAME AND ID
    const allagencyName = allAgency.map((agency) => {
      const {name, id} = agency;
      
      return <option value={id}>{name}</option>

    } )

  const navigate = useNavigate();

  const showAlert = () => {
    swal(
      "Thank you for speaking up!",
      "Your report have been submitted successfully",
      "success"
    );

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  const showFailedAlert = () => {
    {
      swal(
        "Error",
        "Unable to submit your report at the moment please try again later",
        "error"
      );
    }
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          sector: "",
          agency: "",
          reportee: "",
          affiliation: "",
          subject: "",
          message: "",
          upload: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          sector: Yup.string()
            .oneOf(
              [
                "finance",
                "technology",
                "agriculture",
                "oil and gas",
                "banking",
                "education",
                "sports",
                "health",
                "energy",
                "transportation",
                "entertainment",
                "others",
              ],
              "Invalid sector"
            )
            .required("Required!, please select a sector"),

          agency: Yup.number()
            // .oneOf(
            //   [
            //     "frsc",
            //     "nps",
            //     "nscdc",
            //     "ndlea",
            //     "nis",
            //     "nc",
            //     "efcc",
            //     "icfc",
            //     "npf",
            //     "others",
            //   ],
            //   "Invalid agency"
            // )
            .required("Required"),

          reportee: Yup.string().required("Required"),

          affiliation: Yup.string().required("Required"),

          subject: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),

          message: Yup.string()
            .min(30, "Please be more detailed!")
            .max(1000, "Must be 1000 characters of less")
            .required("Please enter a message"),

          upload: Yup.string(),
          // .required('attach a file'),

          acceptedTerms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions.")
            .required("Required"),
        })}
        
        onSubmit={async (values, { setSubmitting }) => {
          {
            values.affiliation = values.affiliation == "yes" ? true : false;
          }
          //   if (values.affiliation === "yes") {
          //     values.affiliation = true;
          //   } else {
          //     values.affiliation;
          //   }
          setSubmitting(false);
          const { sector, agency, reportee, affiliation, subject, message } =
            values;


          const report = {
            subject,
            agencyId: parseInt(agency),
            reportee,
            sector,
            affiliation,
            message,
            anonymity: true,
            attachments: {},
          };
          //   console.log(report);
          

          try {
            // console.log(values)
            let response = await axios.post(
              "http://191.101.241.157:4500/v1/reports/anonymous",
              report
            );
            showAlert();
            // console.log(response.data)
          } catch (error) {
            // console.log(error);
            showFailedAlert();
          }
        }}
      >
		<div id="wrapperForTheAnonymousReportForm">
			<div id="main">
			<Form className="container">
				<h2 className="welcome">Report Form</h2>

				<MySelect label="Sector" name="sector">
				<option value="">Select a sector</option>
				{/* <option value="select" selected>Select</option> */}
				<option value="finance">Finance</option>
				<option value="education">Education</option>
				<option value="sports">Sports</option>
				<option value="health">Health</option>
				<option value="energy">Energy</option>
				<option value="transportation">Transportation</option>
				<option value="agriculture">Agriculture</option>
				<option value="oil and gas">Oil and gas</option>
				<option value="banking">Banking</option>
				<option value="technology">Technology</option>
				<option value="entertainment">Entertainment</option>
				<option value="others">Others</option>
				</MySelect>
				<br />

				<MySelect
				label="Kindly select the agency you wish to report to"
				name="agency"
				>
				<option value="">Select Agency</option>
        {allagencyName}
				{/* <option value="frsc">Federal Road Safety Corps (FRSC)</option>
				<option value="nps">Nigeria Prisons Service (NPS)</option>
				<option value="nscdc">
					Nigeria Security and Civil Defense Corps (NSCDC)
				</option>
				<option value="ndlea">
					Nigeria Drug Law Enforcement Agency (NDLEA)
				</option>
				<option value="nis">Nigeria Immigrations Service (NIS)</option>
				<option value="nc">Nigeria Customs</option>
				<option value="npf">Nigeria Police Force</option>
				<option value="efcc">
					Economic and Finance Crime Commissions (EFCC)
				</option>
				<option value="icfc">
					Independent Corrupt Practices Commission (ICPC)
				</option> */}
				{/* <option value="others">Others</option> */}
				</MySelect>
				<br />

				<div>
				<MyTextInput
					label="Which company, organization or individual is this about?"
					name="reportee"
					type="text"
					placeholder="Start typing..."
				/>
				</div>
				<br />

				<MySelect
				label="Are you affiliated to the above specified"
				name="affiliation"
				>
				<option value="">Select</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				</MySelect>
				<br />

				<div>
				<MyTextInput
					label="Subject"
					name="subject"
					type="text"
					placeholder="Enter subject here.."
				/>
				</div>
				<br />

				{/* <div>
				<MyTextInput 
				className="textarea" 
				rows="4" 
				cols="60" 
				label="What do you want to report?" name="message" 
				placeholder="Enter Report Here"/>
				</div> */}

				<div>
				<MyTextArea
					className="textarea"
					label="What do you want to report?"
					placeholder="Type in your report details here..."
					rows="6"
					name="message"
				/>
				</div>
				<br />

				<div>
				<MyTextInput
					label="Upload Document"
					name="upload"
					type="file"
					className="file-select"
					style={{ border: "none", background: "none" }}
				/>
				</div>
				<br />

				<MyCheckbox
				className="checkbox-input"
				name="acceptedTerms"
				style={{ width: "40px" }}
				>
				I affirm that the information provided is valid
				</MyCheckbox>

				<br />
				<button type="submit" id="myBtn" disabled={Formik.isSubmitting}>
				Submit
				</button>
			</Form>
			</div>
		</div>
      </Formik>
    </>
  );
};
