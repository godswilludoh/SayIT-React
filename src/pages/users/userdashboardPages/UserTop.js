import React from 'react';
import { DateTime } from '../../../helper/date-time/DateTime';
import { useAuth } from '../../../components/hooks/useAuth';

export const UserTop = () => {
	const { user } = useAuth();
	return (
		<div className='user-top'>
			<div className='user-info-display'>
				<p>Dashboard</p>
			</div>
			<div className='user-time'>
				<DateTime></DateTime>
			</div>
			<div className='userProfileImg'>
				<div id='user-profile-container'>
					<img
						id='user-profileImage'
						src='/assets/newUser.png'
						alt='user-profileImage'
					/>
				</div>
				<input
					id='imageUpload'
					type='file'
					name='profile_photo'
					placeholder='Photo'
					required
					capture
				/>
				<span className='user-id' id='user-profilename'>
					{user.userName}
				</span>
			</div>
		</div>
	);
};
