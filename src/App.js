import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import Report from './pages/report/report';
import CreateAccount from './pages/createAccount/CreateAccount';
import Blog from './pages/blog/Blog';
import UsersLogin from './pages/login/users/UsersLogin';
import AdminLogin from './pages/login/admin/AdminLogin';
import AgentsLogin from './pages/login/agents/AgentsLogin';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/signup' element={<CreateAccount />} />
				<Route path='/report' element={<Report />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/login' element={<UsersLogin />} />
				<Route path='/admin' element={<AdminLogin />} />
				<Route path='/agents' element={<AgentsLogin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
