import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ChallanForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    badgeNumber: '',
    password: '',
    confirmPassword: '',
    city: 'Ahmedabad',
    area: '',
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let valid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Invalid email format';
      valid = false;
    }
    if (!formData.badgeNumber.trim()) {
      errors.badgeNumber = 'Badge Number is required';
      valid = false;
    }
    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }
    if (!formData.area.trim()) {
      errors.area = 'Area is required';
      valid = false;
    }
    
    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3000/api/officer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      if (response.ok) navigate('/officers');
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 text-black rounded-lg shadow-lg z-50 overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-6">Add New Officer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Badge Number</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.badgeNumber}
            onChange={(e) => setFormData({...formData, badgeNumber: e.target.value})}
          />
          {errors.badgeNumber && <p className="text-red-500 text-sm">{errors.badgeNumber}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Area</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.area}
            onChange={(e) => setFormData({...formData, area: e.target.value})}
          />
          {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChallanForm;
