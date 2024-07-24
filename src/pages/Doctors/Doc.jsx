import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import home1 from '../../assets/images/docA.webp';
import home2 from '../../assets/images/DocB.webp';
import home3 from '../../assets/images/DocC.avif';
import home4 from '../../assets/images/DOcD.jpg';
import home5 from '../../assets/images/DocE.webp';
import { FaStar } from 'react-icons/fa';

const doctors = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    specialization: 'Cardiologist',
    rating: 4.5,
    description: 'Dr. Jane Smith is a highly experienced cardiologist specializing in advanced cardiovascular treatments.',
    image: home1,
    availability: 'Mon-Fri: 10:00 AM - 4:00 PM',
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    specialization: 'Neurologist',
    rating: 4.2,
    description: 'Dr. John Doe is a renowned neurologist with expertise in treating complex neurological disorders.',
    image: home2,
    availability: 'Tue-Thu: 11:00 AM - 3:00 PM',
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Dermatologist',
    rating: 4.8,
    description: 'Dr. Emily Johnson is a leading dermatologist known for her innovative skin care treatments.',
    image: home3,
    availability: 'Mon, Wed, Fri: 9:00 AM - 5:00 PM',
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    specialization: 'Orthopedic Surgeon',
    rating: 4.7,
    description: 'Dr. Michael Brown is a skilled orthopedic surgeon with a focus on minimally invasive techniques.',
    image: home4,
    availability: 'Mon-Fri: 8:00 AM - 2:00 PM',
  },
  {
    id: 5,
    name: 'Dr. Sarah Davis',
    specialization: 'Pediatrician',
    rating: 4.9,
    description: 'Dr. Sarah Davis is a compassionate pediatrician dedicated to providing comprehensive child care.',
    image: home5,
    availability: 'Tue, Thu: 10:00 AM - 4:00 PM',
  },
  {
    id: 6,
    name: 'Dr. William Taylor',
    specialization: 'Psychiatrist',
    rating: 4.6,
    description: 'Dr. William Taylor is a board-certified psychiatrist specializing in mental health and wellness.',
    image: home1,
    availability: 'Mon-Wed: 12:00 PM - 6:00 PM',
  },
  {
    id: 7,
    name: 'Dr. Jessica Lee',
    specialization: 'Gynecologist',
    rating: 4.4,
    description: 'Dr. Jessica Lee is a trusted gynecologist offering personalized women\'s health services.',
    image: home2,
    availability: 'Mon-Fri: 9:00 AM - 3:00 PM',
  },
  {
    id: 8,
    name: 'Dr. David Wilson',
    specialization: 'Dentist',
    rating: 4.3,
    description: 'Dr. David Wilson is an experienced dentist committed to providing top-notch dental care.',
    image: home3,
    availability: 'Mon-Fri: 11:00 AM - 4:00 PM',
  },
];

const Doc = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleCardClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  const handleBookNow = () => {
    toast.success("Doctor booked successfully!");
    handleCloseModal();
  };

  return (
    <div className="container mx-auto py-10">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(doctor)}
            style={{ minHeight: '350px' }}
          >
            <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
            <div className="p-4 bg-gray-100">
              <h3 className="text-xl font-bold">{doctor.name}</h3>
              <p className="text-gray-700">{doctor.specialization}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((star, index) => (
                  <FaStar
                    key={index}
                    className={`mr-1 ${index < Math.floor(doctor.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-gray-600">{doctor.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto" style={{ maxHeight: '90vh' }}>
            <button onClick={handleCloseModal} className="text-red-500 float-right">X</button>
            <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h2>
            <p className="text-gray-700 mb-2">{selectedDoctor.specialization}</p>
            <p className="text-gray-600 mb-4">{selectedDoctor.description}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((star, index) => (
                <FaStar
                  key={index}
                  className={`mr-1 ${index < Math.floor(selectedDoctor.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-2 text-gray-600">{selectedDoctor.rating.toFixed(1)}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
            <p className="text-gray-600 mb-4">Available times: {selectedDoctor.availability}</p>
            <button
              onClick={handleBookNow}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doc;
