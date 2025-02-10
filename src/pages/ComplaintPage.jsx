import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, ShoppingCart, ShovelIcon, TrendingUp } from "lucide-react";
import ComplaintsOverviewChart from "../components/complaint/ComplaintsOverviewChart";
import ComplaintsByCategoryChart from "../components/complaint/ComplaintsByCategoryChart";
import DailyComplaintsTrend from "../components/complaint/DailyComplaintsTrend";

const salesStats = {
	totalcomplaint: "120",
	pendingcomplaint: "48",
	completedcomplaint: "72",
};

const ComplaintPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Complaints' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* SALES STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Compalaints' icon={ShovelIcon} value={salesStats.totalcomplaint} color='#6366F1' />
					<StatCard
						name='Pending Compalaints'
						icon={ShoppingCart}
						value={salesStats.pendingcomplaint}
						color='#10B981'
					/>
					<StatCard
						name='Completed Compalaints'
						icon={TrendingUp}
						value={salesStats.completedcomplaint}
						color='#F59E0B'
					/>
					<StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
				</motion.div>

				<ComplaintsOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ComplaintsByCategoryChart />
					<DailyComplaintsTrend />
				</div>
			</main>
		</div>
	);
};
export default ComplaintPage;
