import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/custom.scss';
import { AuthProvider } from './helper/context/user-context/AuthContext';
import { AgentReportProvider } from './helper/context/agent-context/AgentReportState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<AgentReportProvider>
						<Routes>
							<Route path='/*' element={<App />} />
						</Routes>
					</AgentReportProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
