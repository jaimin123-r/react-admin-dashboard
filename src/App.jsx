import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/common/Sidebar";
import Login from "./pages/LoginPage";
import OverviewPage from "./pages/OverviewPage";
import OfficerPage from "./pages/OfficerPage";
import UsersPage from "./pages/UsersPage";
import ComplaintPage from "./pages/ComplaintPage";
import ReportsPage from "./pages/ReportsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import AddOfficer from "./components/officer/AddOfficer";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const navigate = useNavigate();

	// Check for stored login credentials on mount
	useEffect(() => {
		const storedAuth = localStorage.getItem("isAuthenticated");
		if (storedAuth === "true") {
			setIsAuthenticated(true);
		}
	}, []);

	// Mock login function
	const handleLogin = (username, password) => {
		if (username === "jaimin" && password === "jaimin123r") {
			setIsAuthenticated(true);
			localStorage.setItem("isAuthenticated", "true"); // Store authentication state
			navigate("/"); // Redirect to the Overview page after successful login
		} else {
			alert("Invalid credentials");
		}
	};

	// Logout function
	const handleLogout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem("isAuthenticated"); // Clear authentication state
		navigate("/login");
	};

	return (
		<div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
			<div className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
				<div className="absolute inset-0 backdrop-blur-sm" />
			</div>

			{/* Render Sidebar only if the user is authenticated */}
			{isAuthenticated && <Sidebar onLogout={handleLogout} />}

			<Routes>
				{/* Public route for Login */}
				<Route path="/login" element={<Login onLogin={handleLogin} />} />

				{/* Protected routes for authenticated users */}
				{isAuthenticated ? (
					<>
						<Route path="/" element={<OverviewPage />} />
						<Route path="/officers" element={<OfficerPage />} />
						<Route path="/add-officer" element={<AddOfficer />} />
						<Route path="/users" element={<UsersPage />} />
						<Route path="/complaints" element={<ComplaintPage />} />
						<Route path="/reports" element={<ReportsPage />} />
						<Route path="/analytics" element={<AnalyticsPage />} />
						<Route path="/settings" element={<SettingsPage />} />
					</>
				) : (
					// Redirect unauthenticated users to Login
					<Route path="*" element={<Login onLogin={handleLogin} />} />
				)}
			</Routes>
		</div>
	);
}

export default App;
