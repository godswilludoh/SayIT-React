import React from 'react';
import {
	Formik,
	Form,
	useField,
	FormikProvider,
	ErrorMessage,
	validateYupSchema,
} from 'formik';
import * as Yup from 'yup';
import { json } from 'react-router';
import { upload } from '@testing-library/user-event/dist/upload';
import { MySelect } from '../../../../components/reportFormFields/MySelect';
import { MyCheckbox } from '../../../../components/reportFormFields/MyCheckbox';
import { MyTextInput } from '../../../../components/reportFormFields/MyTextInput';
import { MyTextArea } from '../../../../components/reportFormFields/MyTextArea';

const UserFormik = () => {
	return (
		<>
			<h2 className='welcome'>Report Form</h2>
			<Formik
				initialValues={{
					sector: '',
					agency: '',
					reportee: '',
					affiliation: '',
					subject: '',
					message: '',
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

					agency: Yup.string()
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

					subject: Yup.string()
						.max(30, 'Must be 30 characters or less')
						.required('Required'),

					message: Yup.string()
						.min(30, 'Please be more detailed!')
						.max(1000, 'Must be 1000 characters of less')
						.required('Please enter a message'),

					upload: Yup.string(),
					// .required('attach a file'),

					acceptedTerms: Yup.boolean()
						.oneOf([true], 'You must accept the terms and conditions.')
						.required('Required'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
					// console.log("values");
					// alert("values");
				}}
			>
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
							name='agency'
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
							<option value='nis'>Nigeria Immigrations Service (NIS)</option>
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
						>
							<option value=''>Select</option>
							<option value='yes'>Yes</option>
							<option value='no'>No</option>
						</MySelect>
						<br />

						<div>
							<MyTextInput
								label='Subject'
								name='subject'
								type='text'
								placeholder='Enter subject here..'
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
							<MySelect label='Do you wish to be Anonymous?' name='anonymous'>
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
						<button type='submit' id='myBtn' disabled={Formik.isSubmitting}>
							Submit
						</button>
					</Form>
				</div>
			</Formik>
		</>
	);
};

export default UserFormik;