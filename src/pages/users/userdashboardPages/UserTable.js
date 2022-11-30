import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserTableInfo } from './UserTableInfo';

export const UserTable = ({ reports }) => {
	const [dataTable, setDataTable] = useState([]);
	console.log(dataTable);

	const column = [
		{ heading: 'S/N' },
		{ heading: 'Date Reported' },
		{ heading: 'Report ID' },
		{ heading: 'Sector' },
		{ heading: 'Action' },
	];
	return (
		<div className='user-table-section'>
			<div className='user-table'>
				<div className='user-report-table'>
					<div className='user-report-text'>
						<p>Reports</p>
					</div>
					<div className='user-report-id'>
						<input
							id='user-search-input'
							data-table='user-table'
							type='text'
							placeholder='Enter Report ID'
						/>
					</div>
				</div>
			</div>

			<div id='user-table' className='user-table'>
				<UserTableInfo data={dataTable} column={column} reports={reports} />
			</div>
			<div className='user-pagination'>
				<a id='prev-button' className='user-pagination-bracket' href='#'>
					‹
				</a>
				<a className='user-pagination-item' href='#'>
					1
				</a>
				<a className='user-pagination-item' href='#'>
					2
				</a>
				<a className='user-pagination-item' href='#'>
					3
				</a>
				<a className='user-pagination-item' href='#'>
					4
				</a>
				<a className='user-pagination-item' href='#'>
					5
				</a>
				<a id='next-button' className='user-pagination-bracket' href='#'>
					›
				</a>
			</div>
		</div>
	);
};
