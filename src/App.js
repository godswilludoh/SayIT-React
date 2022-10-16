import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
// import Report from './pages/report/report';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<LandingPage />
			<Routes>
				<Route path='/landingPage' element={<LandingPage />} />
				{/* <Route path='/report' element={<Report />} /> */}
			</Routes>

		</BrowserRouter>
	);
}

export default App;
