import React from 'react';

export const UserCards = ({ reports }) => {
	const totalReports = reports.length;
	const openReport = reports.filter(
		(item) => item.status === 'inProgress'
	).length;
	const resolvedReport = reports.filter(
		(item) => item.status === 'resolved'
	).length;
	return (
		<div className='user-cards'>
			<div className='user-card-item'>
				<p className='user-p-top'>Total</p>
				<br />
				<p className='user-p-bottom'>{totalReports}</p>
			</div>
			<div className='user-card-item'>
				<p className='user-p-top'>Open Complaints</p>
				<br />
				<p className='user-p-bottom user-bottom2'>{openReport}</p>
			</div>
			<div className='user-card-item'>
				<p className='user-p-top'>Resolved complaints</p>
				<br />
				<p className='user-p-bottom'>{resolvedReport}</p>
			</div>
			<div className='user-button-container'>
				<a className='user-report-button' href='/pages/makeReport.html'>
					Make New Report
				</a>
			</div>
		</div>
	);
};
