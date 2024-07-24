import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import starIcon from '../../assets/images/Star.png';
import SidePanel from './SidePanel';
import { formateDate } from '../../utils/formateDate';
import HashLoader from 'react-spinners/HashLoader';


const DoctorDetails = () => {
  const [doctor, setDoctor] = useState(null);
  const [tab, setTab] = useState('about'); // Initialize tab state
  const { id } = useParams();

  const handleBookAppointment = async (doctorId) => {
    try {
      // Assuming you have a function to get the user's information after login
      const user = getUser(); // You need to implement this function
  
      if (!user) {
        // Handle the case where the user is not logged in
        // You might want to redirect to the login page or show a login modal
        return;
      }
  
      const appointmentData = {
        doctorId: doctorId,
        userId: user.id,
        // ... other fields
      };
  
      // Perform the appointment booking logic, e.g., sending a request to the server
      const response = await fetch(`${BASE_URL}/appointments/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }
  
      // Assuming you have a function to fetch the updated list of appointments
      const updatedAppointments = await fetchUpdatedAppointments(); // Implement this function
  
      // Update the list of appointments in the state
      setAppointments(updatedAppointments);
  
      // Assuming you have a toast notification library, you can show a success message
      toast.success('Appointment booked successfully!');
    } catch (error) {
      // Handle errors, show an error message, or redirect to an error page
      console.error('Error booking appointment:', error.message);
    }
  };
  

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/doctors/${id}`);
        const data = await response.json();

        if (response.ok) {
          setDoctor(data.data);
        } else {
          console.error('Failed to fetch doctor details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error.message);
      }
    };

    fetchDoctorDetails();
  }, [id]);

  // Render loading or error state while fetching data
  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctor.photo} alt="" className="w-[300px] h-[240px]" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text--[12px]
                                  leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">{doctor.specialization}</span>

                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">{`Dr. ${doctor.name}`}</h3>

                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-14px leading-5 lg:text-[16px]
                                    lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="text-14px leading-5 lg:text-[16px]
                                    lg:leading-7 font-[400] text-text-Color">(272)</span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quo sunt?
                                    Ut sit, illum, doloremque molestias ipsam fuga animi sint temporibus nisi deleniti itaque libero. Quidem itaque ullam aut vel! </p>
              </div>
            </div>

            <div className=" mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab('about')}
                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}>
                About
              </button>

              <button
                onClick={() => setTab('feedback')}
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}>
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === 'about' && <DoctorAbout doctor={doctor} />}
              {tab === 'feedback' && <Feedback />}
            </div>
          </div>

          <div> <SidePanel  doctor={doctor} onBookAppointment={handleBookAppointment}/> </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
