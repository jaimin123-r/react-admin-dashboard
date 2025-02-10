import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ChallanForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    badgeNumber: '',
    password: '',
    city: '',
    area: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/api/officer/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      alert(result.message);
    
    navigate('/officers')
  }

  

  return (
    <div className="max-w-2xl mx-auto p-6 z-10">
      <h2 className="text-2xl font-bold mb-6">Add New Officer</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label className="block text-gray-300 mb-2">name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg uppercase"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Badge Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.badgeNumber}
              onChange={(e) => setFormData({...formData, badgeNumber: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Confirm password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
            //   value={formData.challanNumber}
            //   onChange={(e) => setFormData({...formData, challanNumber: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">City</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Area</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.area}
              onChange={(e) => setFormData({...formData, area: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Pincode</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.pincode}
              onChange={(e) => setFormData({...formData, pincode: e.target.value})}
              required
            />
          </div>
        </div>

        {/* <div>
          <label className="block text-gray-300 mb-2">Address</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            rows="3"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ChallanForm