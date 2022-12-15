import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './utility/Layout';
import LandingPage from './pages/landingPage/LandingPage';
import { ContantUs } from './pages/landingPage/ContantUs';
import Blog from './pages/blog/Blog';
import UsersLogin from './pages/login/users/UsersLogin';
import AdminLogin from './pages/login/admin/AdminLogin';
import AgentsLogin from './pages/login/agents/AgentsLogin';
import AgentDashBoard from './pages/agentDashboard/AgentDashBoard';
import Admindash from './pages/AdminDashboard/AdminDash';
import { ReportForm } from './pages/report/ReportForm';
import SignupAcc from './pages/signup/SignupAcc';
import UserDashboard from './pages/users/UserDashboard';
import AgentNotificationPage from './pages/agentNotificationPage/AgentNotificationPage';
import { AdminUsers } from './pages/AdminDashboard/AdminUsers';
import { AdminReport } from './pages/AdminDashboard/AdminReport';
import { AdminAgents } from './pages/AdminDashboard/AdminAgents';
import { MakeReportForm } from './pages/users/userdashboardPages/makereport/MakeReport';
import { EditProfile } from './pages/users/userdashboardPages/editProfile/EditProfile';
import UserForgotPassword from './pages/login/userforgotpassword/UserForgotPassword';
import { AdminProfile } from './pages/AdminDashboard/AdminProfile';
import AgentProfilePage from './pages/agentProfilePage/AgentProfilePage';
import { Oval } from 'react-loader-spinner';
import RequireAuth from './utility/RequireAuth';
import { AdminContext } from './helper/context/admin-context/AdminContex';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, []);
	}, []);
	return isLoading ? (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Oval
				height={80}
				width={80}
				color='#4fa94d'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				position=''
				ariaLabel='oval-loading'
				secondaryColor='#4fa94d'
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
		</div>
	) : (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<LandingPage />} />
					<Route path='report' element={<ReportForm />} />
					<Route path='signup' element={<SignupAcc />} />
					<Route path='blog' element={<Blog />} />
					<Route path='contact' element={<ContantUs />} />
					<Route path='/login' element={<UsersLogin />} />
					<Route path='admin' element={<AdminLogin />} />
					<Route path='agents' element={<AgentsLogin />} />
					<Route path='userforgotpassword' element={<UserForgotPassword />} />

					{/* Protected routes */}
					{/* <Route element={<RequireAuth />}> */}
					<Route path='users' element={<UserDashboard />} />
					<Route path='agentDashboard' element={<AgentDashBoard />} />
					<Route path='adminDashboard' element={<Admindash />} />
					<Route
						path='agentNotificationPage'
						element={<AgentNotificationPage />}
					/>
					<Route path='agentProfilePage' element={<AgentProfilePage />} />
					<Route path='adminUsers' element={<AdminUsers />} />
					<Route path='adminReport' element={<AdminReport />} />
					<Route path='adminAgents' element={<AdminAgents />} />
					<Route path='makereport' element={<MakeReportForm />} />
					<Route path='editprofile' element={<EditProfile />} />
					<Route path='adminProfile' element={<AdminProfile />} />
					{/* </Route> */}
				</Route>
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
