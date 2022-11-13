import React from 'react';

const MakeReportTop = ({ title, welcome, classname, classname2 }) => {
	return (
		<>
			<div className={classname}>{title}</div>
			<p className={classname2}>{welcome}</p>
		</>
	);
};

export default MakeReportTop;
