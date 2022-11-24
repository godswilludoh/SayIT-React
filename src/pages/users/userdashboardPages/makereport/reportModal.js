import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const reportModal = () => {
	const navigate = useNavigate();

	const showAlert = () => {
		{
			swal(
				'Thank you for speaking up!',
				'Your report have been submitted successfully',
				'success'
			);
		}
		setTimeout(() => {
			navigate('/makereport');
		}, 5000);
	};
};

export default reportModal;
