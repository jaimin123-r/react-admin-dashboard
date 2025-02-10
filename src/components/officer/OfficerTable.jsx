import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Jatinbhai Patel",
    email: "example@gmail.com",
    Badge_Number: "1234",
    Area: "Maninagar",
    createdAt: "9/9/2000",
  },
  {
    id: 2,
    name: "Rameshbhai Gupta ",
    email: "example@gmail.com",
    Badge_Number: "4567",
    Area: "Prahladnagae",
    createdAt: "9/9/2000",
  },
  {
    id: 3,
    name: "Harshbhai Soni",
    email: "example@gmail.com",
    Badge_Number: "1234",
    Area: "Satelite",
    createdAt: "9/9/2000",
  },
  {
    id: 4,
    name: "Het Raghani",
    email: "example@gmail.com",
    Badge_Number: "9845",
    Area: "Navrangpura",
    createdAt: "9/9/2000",
  },
  {
    id: 5,
    name: "Pankajbhai Patel",
    email: "example@gmail.com",
    Badge_Number: "5241",
    Area: "Juhapura",
    createdAt: "9/9/2000",
  },
];

const OfficerTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.Area.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/officer/search")
      .then((result) => result.json())
      .then((data) => {
        setFilteredProducts(data.message);
        // console.log("API Response:", data.message);
      })
      .catch((error) => {
        console.error("Error fetching challans:", error);
      });
  }, []);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Officers List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <Link
            to="/add-officer"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-2"
          >
            +Add Officer
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Badge Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Joining Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {/* <img
										src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
										alt='Product img'
										className='size-10 rounded-full'
									/> */}
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.badgeNumber}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.area}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
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
export default OfficerTable;
