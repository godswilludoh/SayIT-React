import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
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

function App() {
	return (
		<>
			<Routes>
				<Route index element={<LandingPage />} />
				{/* <Route path='signup' element={<CreateAccount />} /> */}
				{/* <Route path='report' element={<Report />} /> */}
				<Route path='report' element={<ReportForm />} />
				{/* <Route path='report' element={<SignupForm1 />} /> */}
				<Route path='signup' element={<SignupAcc />} />
				{/* <Route path='/report' element={<Report />} /> */}
				<Route path='blog' element={<Blog />} />
				<Route path='/login' element={<UsersLogin />} />
				<Route path='admin' element={<AdminLogin />} />
				<Route path='agents' element={<AgentsLogin />} />
				<Route path='users' element={<UserDashboard />} />
				<Route path='agentDashboard' element={<AgentDashBoard />} />
				<Route path='adminDashboard' element={<Admindash />} />
				<Route
					path='agentNotificationPage'
					element={<AgentNotificationPage />}
				/>
				<Route path='adminUsers' element={<AdminUsers />} />
				<Route path='adminReport' element={<AdminReport />} />
				<Route path='adminAgents' element={<AdminAgents />} />
				<Route path='makereport' element={<MakeReportForm />} />
				<Route path='editprofile' element={<EditProfile />} />
			</Routes>
		</>
	);
}

export default App;
