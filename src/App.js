import './App.css';
import Navbar from './components/nav/Navbar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
// import { Report } from './pages/report/Report';
import CreateAccount from './pages/createAccount/CreateAccount';
import Blog from './pages/blog/Blog';
import UsersLogin from './pages/login/users/UsersLogin';
import AdminLogin from './pages/login/admin/AdminLogin';
import AgentsLogin from './pages/login/agents/AgentsLogin';
import AgentDashBoard from './pages/agentDashboard/AgentDashBoard';
import Admindash from './pages/AdminDashboard/AdminDash';
import {ReportForm} from './pages/report/ReportForm'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path='signup' element={<CreateAccount />} />
				{/* <Route path='report' element={<Report />} /> */}
				<Route path='report' element={<ReportForm />} />
				{/* <Route path='report' element={<SignupForm1 />} /> */}
				<Route path='blog' element={<Blog />} />
				<Route path='login' element={<UsersLogin />} />
				<Route path='admin' element={<AdminLogin />} />
				<Route path='agents' element={<AgentsLogin />} />
				<Route path='agentDashboard' element={<AgentDashBoard />} />
				<Route path='adminDashboard' element={<Admindash />} />
			</Routes>
		</>
	);
}

export default App;
