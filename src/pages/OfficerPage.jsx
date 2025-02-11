import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { MapPinned } from "lucide-react";
import { GiPoliceOfficerHead } from "react-icons/gi";
import OfficerTable from "../components/officer/OfficerTable";
// import AddOfficer from "../components/officer/AddOfficer";

// const handleSearch = (e) => {
// 	const term = e.target.value.toLowerCase();
// 	setsearchOfficer(term);
// 	const filtered = Officer.filter(
// 		(officer) =>
// 			officer.name.toLowerCase().includes(term) ||
// 			officer.area.toLowerCase().includes(term)
// 	);
// 	setOfficer(filtered);
// 	if (term === "") fetch("http://localhost:3000/api/officer/search")
// 		.then((result) => result.json())
// 		.then((data) => {
// 			setOfficer(data.message);
// 			// console.log("API Response:", data.message.length);
// 		})
// 		.catch((error) => {
// 			console.error("Error fetching challans:", error);
// 		});
// };

const OfficerPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Manage Officers' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Officers' icon={GiPoliceOfficerHead} value={3} color='#6366F1' />
					<StatCard name='Total Area' icon={MapPinned} value={22} color='#10B981' />
					{/* <StatCard name='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' /> */}
					{/* <StatCard name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#EF4444' /> */}
				</motion.div>

				{/* <AddOfficer /> */}
				<OfficerTable />
			</main>
		</div>
	);
};
export default OfficerPage;
