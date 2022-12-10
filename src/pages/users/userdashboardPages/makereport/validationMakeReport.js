import * as Yup from 'yup';

const validationSchema = Yup.object({
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

	agency: Yup.number().required('Required'),

	reportee: Yup.string().required('Required'),

	affiliation: Yup.boolean().required('Required'),

	anonymity: Yup.boolean().required('Required'),

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
});

export default validationSchema;
