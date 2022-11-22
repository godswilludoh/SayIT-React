import React, { useState, useEffect } from 'react';
import {
	Formik,
	Form,
	useField,
	FormikProvider,
	ErrorMessage,
	validateYupSchema,
} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
// import { json } from 'react-router';
// import { upload } from '@testing-library/user-event/dist/upload';
import { MySelect } from '../../../../components/reportFormFields/MySelect';
import { MyCheckbox } from '../../../../components/reportFormFields/MyCheckbox';
import { MyTextInput } from '../../../../components/reportFormFields/MyTextInput';
import { MyTextArea } from '../../../../components/reportFormFields/MyTextArea';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserFormik = () => {
	const [token, setToken] = useState(false);
	const localToken = JSON.parse(localStorage.getItem('token'));
	let tokenExists = localToken?.length > 0;
	useEffect(() => {
		// console.log('Token exists');
		if (tokenExists) {
			setToken(true);
		}
	}, [tokenExists]);
	return (
		<>
			<h2 className='welcome'>Report Form</h2>
			<Formik
				initialValues={{
					sector: '',
					organization: '',
					reportee: '',
					affiliation: false,
					title: '',
					description: '',
					upload: '',
					acceptedTerms: false, // added for our checkbox
				}}
				validationSchema={Yup.object({
					sector: Yup.string()
						.oneOf(
							[
								'finance',
								'technology',
								'agriculture',
								'oil and gas',
								'banking',
								'education',
								'sports',
								'health',
								'energy',
								'transportation',
								'entertainment',
								'others',
							],
							'Invalid sector'
						)
						.required('Required!, please select a sector'),

					organization: Yup.string()
						.oneOf(
							[
								'frsc',
								'nps',
								'nscdc',
								'ndlea',
								'nis',
								'nc',
								'efcc',
								'icfc',
								'npf',
								'others',
							],
							'Invalid agency'
						)
						.required('Required'),

					reportee: Yup.string().required('Required'),

					affiliation: Yup.string().required('Required'),

					title: Yup.string()
						.max(30, 'Must be 30 characters or less')
						.required('Required'),

					description: Yup.string()
						.min(30, 'Please be more detailed!')
						.max(1000, 'Must be 1000 characters of less')
						.required('Please enter a message'),

					upload: Yup.string(),
					// .required('attach a file'),

					acceptedTerms: Yup.boolean()
						.oneOf([true], 'You must accept the terms and conditions.')
						.required('Required'),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					let { title, organization, affiliation, description } = values;
					if (affiliation.values === 'yes') {
						affiliation = true;
						console.log(affiliation);
					} else {
						affiliation = false;
					}
					// affiliation === 'yes' ? true : false;
					setSubmitting(true);
					try {
						let response = await axios.post(
							'https://say--it.herokuapp.com/v1/reports',
							{ title, organization, affiliation, description }
						);
						console.log(response);
						const { access, refresh } = response.data.tokens;
						const tokens = [];
						tokens.push({ access: access.token });
						tokens.push({ refresh: refresh.token });
						localStorage.setItem('token', JSON.stringify(tokens));
						if (token) {
							toast.success('Report Submitted Successfully!', {
								theme: 'light',
							});
						}
					} catch (error) {
						console.log(error);
						toast.error('Report Submission Failed! Please try again', {
							position: 'top-center',
						});
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
						<form action=''>
							<div className='main-makereport'>
								<Form className='makereportform'>
									<MySelect label='Sector' name='sector'>
										<option value=''>Select a sector</option>
										{/* <option value="select" selected>Select</option> */}
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
										name='organization'
										onChange={handleChange}
										value={values.organization}
									>
										<option value=''>Select Agency</option>
										<option value='frsc'>
											Federal Road Safety Corps (FRSC)
										</option>
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
										<option value='yes'>Yes</option>
										<option value='no'>No</option>
									</MySelect>
									<br />

									<div>
										<MyTextInput
											label='Subject'
											name='title'
											type='text'
											placeholder='Enter subject here..'
											onChange={handleChange}
											value={values.title}
										/>
									</div>
									<br />
									<div>
										<MyTextArea
											className='textarea'
											label='What do you want to report?'
											placeholder='Enter Report Here'
											rows='6'
											name='description'
											onChange={handleChange}
											value={values.description}
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
											name='anonymous'
										>
											<option value=''>Select</option>
											<option value='yes'>Yes</option>
											<option value='no'>No</option>
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
										{isSubmitting ? 'Loading' : 'SUBMIT'}
									</button>
								</Form>
							</div>
						</form>
					</>
				)}
			</Formik>
		</>
	);
};

export default UserFormik;
