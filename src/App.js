import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Report from './pages/report/Report';
import Blog from './pages/blog/Blog';
import UsersLogin from './pages/login/users/UsersLogin';
import AdminLogin from './pages/login/admin/AdminLogin';
import AgentsLogin from './pages/login/agents/AgentsLogin';
import AgentDashBoard from './pages/agentDashboard/AgentDashBoard';
import Admindash from './pages/AdminDashboard/AdminDash';
import SignupAcc from './pages/signup/SignupAcc';
import UserDashboard from './pages/users/UserDashboard';
import { AdminReport } from './pages/AdminDashboard/AdminReport';

function App() {
	return (
		<>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path='signup' element={<SignupAcc />} />
				<Route path='/report' element={<Report />} />
				<Route path='blog' element={<Blog />} />
				<Route path='/login' element={<UsersLogin />} />
				<Route path='admin' element={<AdminLogin />} />
				<Route path='agents' element={<AgentsLogin />} />
				<Route path='users' element={<UserDashboard />} />
				<Route path='agentDashboard' element={<AgentDashBoard />} />
				<Route path='adminDashboard' element={<Admindash />} />
				<Route path='adminReport' element={<AdminReport />} />
			</Routes>
		</>
	);
}

export default App;
