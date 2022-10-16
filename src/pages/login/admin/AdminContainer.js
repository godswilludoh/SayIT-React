import React from 'react';
import Footer from '../../../components/footer/Footer';
import Input from '../Input';

const AdminContainer = () => {
	return (
		<section className='theLoginSide'>
			<div className='innerContainer'>
				<h3 className='adminTitle'>ADMIN LOGIN</h3>
				<form id='admin_Form'>
					<div className='formGroup'>
						<span className='icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
								style={{ fill: 'rgb(137, 134, 133)' }}
							>
								<path d='M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z'></path>
							</svg>
						</span>
						<Input
							type='text'
							name='adminlogin'
							placeholder='Admin ID'
							id='adminID'
							required
						/>
					</div>

					<div className='formGroup'>
						<span className='icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
								style={{ fill: 'rgb(137, 134, 133)' }}
							>
								<path d='M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z'></path>
							</svg>
						</span>
						<Input
							type='password'
							name='password'
							placeholder='Password'
							id='adminpassword'
							required
						/>
						<i className='far fa-eye' id='togglePassword' />
					</div>

					<button className='logInButton'>LOGIN</button>
				</form>
			</div>
			<Footer />
		</section>
	);
};

export default AdminContainer;
