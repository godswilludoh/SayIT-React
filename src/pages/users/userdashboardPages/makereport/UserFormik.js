import React, { useState, useEffect } from 'react';
import { Formik, Form, useField, FormikProvider, ErrorMessage } from 'formik';
import validationSchema from './validationMakeReport';
import axios from 'axios';
import { MySelect } from '../../../../components/reportFormFields/MySelect';
import { MyCheckbox } from '../../../../components/reportFormFields/MyCheckbox';
import { MyTextInput } from '../../../../components/reportFormFields/MyTextInput';
import { MyTextArea } from '../../../../components/reportFormFields/MyTextArea';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../components/hooks/useAuth';

const UserFormik = () => {
	const navigate = useNavigate();

	const { auth } = useAuth();
	console.log(auth.accessToken);
	const config = {
		headers: {
			Authorization: `Bearer ${auth.accessToken}`,
		},
	};

	const showAlert = () => {
		swal(
			'Thank you for speaking up!',
			'Your report have been submitted successfully',
			'success'
		);

		setTimeout(() => {
			navigate('/users');
		}, 5000);
	};

	const showFailedAlert = () => {
		swal(
			'Error',
			'Unable to submit your report at the moment please try agin later',
			'error'
		);

		setTimeout(() => {
			navigate('/makereport');
		}, 5000);
	};

	return (
		<>
			<h2 className='welcome'>Report Form</h2>
			<Formik
				initialValues={{
					sector: '',
					agency: '',
					reportee: '',
					affiliation: false,
					subject: '',
					message: '',
					attachments: {},
					anonymity: false,
				}}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					let {
						sector,
						agency,
						reportee,
						affiliation,
						subject,
						message,
						anonymity,
					} = values;
					const report = {
						subject,
						agency,
						reportee,
						sector,
						affiliation,
						message,
						anonymity,
						attachments: {},
					};

					values.affiliation = values.affiliation === 'yes' ? true : false;
					values.anonymity = values.anonymity === 'yes' ? true : false;
					setSubmitting(true);

					try {
						if (values.anonymity) {
							await axios.post(
								'https://say--it.herokuapp.com/v1/reports',
								report
							);
							showAlert();
						} else {
							await axios.post(
								'https://say--it.herokuapp.com/v1/reports',
								report,
								config
							);
							showAlert();
						}
					} catch (error) {
						showFailedAlert();
					}
				}}
			>
				{({
					formik,
					values,
					errors,
					touched,
					handleSubmit,
					handleChange,
					isSubmitting,
				}) => (
					<>
						<div className='main-makereport'>
							<Form className='makereportform'>
								{/* <pre>{JSON.stringify(values, 2, null)}</pre> */}
								<MySelect label='Sector' name='sector'>
									<option value=''>Select a sector</option>
									<option value='finance'>Finance</option>
									<option value='education'>Education</option>
									<option value='sports'>Sports</option>
									<option value='health'>Health</option>
									<option value='energy'>Energy</option>
									<option value='transportation'>Transportation</option>
									<option value='agriculture'>Agriculture</option>
									<option value='oil and gas'>Oil and gas</option>
									<option value='banking'>Banking</option>
									<option value='technology'>Technology</option>
									<option value='entertainment'>Entertainment</option>
									<option value='others'>Others</option>
								</MySelect>
								<br />

								<MySelect
									label='Kindly select the agency you wish to report to'
									name='agency'
									onChange={handleChange}
									value={values.agency}
								>
									<option value=''>Select Agency</option>
									<option value='frsc'>Federal Road Safety Corps (FRSC)</option>
									<option value='nps'>Nigeria Prisons Service (NPS)</option>
									<option value='nscdc'>
										Nigeria Security and Civil Defense Corps (NSCDC)
									</option>
									<option value='ndlea'>
										Nigeria Drug Law Enforcement Agency (NDLEA)
									</option>
									<option value='nis'>
										Nigeria Immigrations Service (NIS)
									</option>
									<option value='nc'>Nigeria Customs</option>
									<option value='npf'>Nigeria Police Force</option>
									<option value='efcc'>
										Economic and Finance Crime Commissions (EFCC)
									</option>
									<option value='icfc'>
										Independent Corrupt Practices Commission (ICPC)
									</option>
									<option value='others'>Others</option>
								</MySelect>
								<br />

								{/* the margin  on all <MyTextInput> component is too much */}
								<div>
									<MyTextInput
										label='Which company, organization or individual is this about?'
										name='reportee'
										type='text'
										placeholder='Start typing...'
									/>
								</div>
								<br />

								<MySelect
									label='Are you affiliated to the above specified'
									name='affiliation'
									onChange={handleChange}
									value={values.affiliation}
								>
									<option value=''>Select</option>
									<option value={true}>Yes</option>
									<option value={false}>No</option>
								</MySelect>
								<br />

								<div>
									<MyTextInput
										label='Subject'
										name='subject'
										type='text'
										placeholder='Enter subject here..'
										onChange={handleChange}
										value={values.subject}
									/>
								</div>
								<br />
								<div>
									<MyTextArea
										className='textarea'
										label='What do you want to report?'
										placeholder='Enter Report Here'
										rows='6'
										name='message'
										onChange={handleChange}
										value={values.message}
									/>
								</div>
								<br />

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: '2rem',
									}}
								>
									<MySelect
										label='Do you wish to be Anonymous?'
										name='anonymity'
										onChange={handleChange}
										value={values.anonymity}
									>
										<option value=''>Select</option>
										<option value={true}>Yes</option>
										<option value={false}>No</option>
									</MySelect>

									<MyTextInput
										label='Upload Document'
										name='upload'
										type='file'
										className='file-select'
										style={{ border: 'none', background: 'none' }}
									/>
								</div>

								<br />

								<MyCheckbox
									className='checkbox-input'
									name='acceptedTerms'
									style={{ width: '40px' }}
								>
									I affirm that the information provided is valid
								</MyCheckbox>

								<br />
								<button
									type='submit'
									id='myBtn'
									disabled={isSubmitting}
									onClick={handleSubmit}
								>
									{isSubmitting ? 'Submitting...' : 'SUBMIT'}
								</button>
							</Form>
						</div>
					</>
				)}
			</Formik>
		</>
	);
};

export default UserFormik;
