import { BarChart2, IndianRupee, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import Towing_channelChart from "../components/overview/Towing_channelChart";

const OverviewPage = () => {
	const towImage = '/Images/tow-truck.png'
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Towed Vehicles ' icon={Zap} value='244' color='#6366F1' />
					<StatCard name='New Complaints' icon={Users} value='15' color='#8B5CF6' />
					<StatCard name='Total Income' icon={IndianRupee } value='Rs.45000' color='#EC4899' />
					<StatCard name='Working Tow Trucks' icon={BarChart2} value='19' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<Towing_channelChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
