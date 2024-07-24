import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidePanel = ({ doctor, onBookAppointment }) => {
  const handleBookAppointment = () => {
    if (!onBookAppointment) {
      // Handle the case where onBookAppointment is not defined
      console.error('onBookAppointment is not defined');
      return;
    }

    // Assuming you have a function to handle booking on the parent component
    onBookAppointment(doctor.id);

    // Show toast notification
    toast.success('Appointment booked successfully!');
  };

    if (!doctor) {
      // Handle loading state or display an error message
      return <p>Loading...</p>;
    }

    return(
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Ticket Price</p>
                    <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 
                    text-headingColor font-bold">{doctor.ticketPrice} BDT</span>
            </div>

            <div className='mt-[30px]'>
                <p className="text__para mt-0 font-semibold text-headingColr">Available Time Slots</p>

                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">{doctor.tday}</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">{doctor.tstarttime} - {doctor.tendtime}</p>
                    </li>

                    {/* i'll make the rest an array to add more */}

                    {/* <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">6:00 PM - 10:30 PM</p>
                    </li>

                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Friday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">8:00 PM - 10:30 PM</p>
                    </li> */}
                </ul>
            </div>


            <button className="btn px-2 w-full rounded-md" onClick={handleBookAppointment}>
        Book Appointment
      </button>
        </div>
    );
};

export default SidePanel;