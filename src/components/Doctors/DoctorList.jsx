import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}//doctors`);
        const data = await response.json();

        if (response.ok) {
          setDoctors(data.data);
        } else {
          console.error('Failed to fetch doctors:', data.message);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error.message);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt:-[30px] lg:mt-[55px]">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
