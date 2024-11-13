import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const BON_PLAN_DATA = [
	{ id: 1, name: "kayo", category: "Café", address: "Ariana Soghra ", visits: 150 },
	{ id: 2, name: "ACE London", category: "cafe", address: "Ariana Soghra", visits: 300 },
	{ id: 3, name: "Diese", category: "Restaurant", address: "Ariana Soghra", visits: 120 },
	{ id: 4, name: "TheX_Level", category: "Café-Resto", address: "Ariana Soghra", visits: 250 },
	{ id: 5, name: "Comme Chez Toi", category: "Café-Resto", address: "Ariana Soghra",  visits: 500 },
];

const BonsPlansTable = () => {

	const [searchTerm, setSearchTerm] = useState("");

	const [filteredPlans, setFilteredPlans] = useState(BON_PLAN_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = BON_PLAN_DATA.filter(
			(plan) => plan.name.toLowerCase().includes(term) || plan.category.toLowerCase().includes(term) || plan.address.toLowerCase().includes(term)
		);
		setFilteredPlans(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Liste des bons plans locaux</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Rechercher des bons plans...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Nom
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Catégorie
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Adresse
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Offre
							</th>
							
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Visites
							</th>
							
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredPlans.map((plan) => (
							<motion.tr
								key={plan.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{plan.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{plan.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{plan.address}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{plan.offer}
								</td>
								
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{plan.visits}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default BonsPlansTable;
