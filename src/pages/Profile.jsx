import React, { useState } from 'react';
import { FaUser, FaKey, FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultProfileImg from '../assets/images/docA.webp';
import doctorImg from '../assets/images/home1.png'; // Replace with dynamic doctor images

const appointments = [
  {
    id: 1,
    doctorName: 'Dr. Jane Smith',
    specialization: 'Cardiologist',
    date: '2024-08-15',
    time: '10:00 AM',
  },
  {
    id: 2,
    doctorName: 'Dr. John Doe',
    specialization: 'Neurologist',
    date: '2024-08-20',
    time: '2:00 PM',
  }
];

const Profile = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [password, setPassword] = useState('******');

  const handleUpdate = () => {
    toast.success('Profile updated successfully!');
  };

  const handleCall = (doctorName) => {
    // Implement the call functionality here
    window.alert(`Initiating a call with ${doctorName}`);
  };

  const handleVideoCall = (doctorName) => {
    // Implement the video call functionality here
    window.alert(`Starting a video call with ${doctorName}`);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center mb-6">
          <img src={defaultProfileImg} alt="Profile" className="w-20 h-20 rounded-full object-cover mr-4" />
          <div>
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600">+1234567890</p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Update
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left">Doctor</th>
              <th className="py-2 px-4 text-left">Specialization</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b">
                <td className="py-2 px-4 flex items-center">
                  <img src={doctorImg} alt="Doctor" className="w-12 h-12 rounded-full object-cover mr-2" />
                  {appointment.doctorName}
                </td>
                <td className="py-2 px-4">{appointment.specialization}</td>
                <td className="py-2 px-4">{appointment.date}</td>
                <td className="py-2 px-4">{appointment.time}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button
                    onClick={() => handleCall(appointment.doctorName)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700 transition"
                  >
                    <FaPhoneAlt />
                  </button>
                  <button
                    onClick={() => handleVideoCall(appointment.doctorName)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition"
                  >
                    <FaVideo />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
