import React from 'react';

export const UserTable = () => {
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

			<table id='user-table' className='user-table'></table>
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
