import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import UsersLogin from './pages/login/users/UsersLogin';
import AdminLogin from './pages/login/admin/AdminLogin';
// import Report from './pages/report/report';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<LandingPage />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				{/* <Route path='/report' element={<Report />} /> */}
				{/* <Route path='/' element={<UsersLogin />} /> */}
				{/* <Route path='/' element={<AdminLogin />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
