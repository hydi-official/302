import React, { useContext, useState, useEffect } from 'react';
import { authContext } from '../../context/AuthContext';
import Overview from './Overview';
import Profile from './Profile';
import useGetProfile from '../../hooks/usefetchData';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { HiInformationCircle } from 'react-icons/hi2';
import home8 from '../../assets/images/home8.jpg';
import Appointments from './Appointments';

const Dashboard = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings');
  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

  useEffect(() => {
    // Set the initial tab to 'Overview' when the component mounts
    setTab('overview');
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <section>
      <div className="max-w-[1178px] px-5 mx-auto">
        
        {loading && !error && <Loading />}
        {error && !loading && <Error errorMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-5 px-38 rounded-md">
              <div className="mt-[5px] md:mt-[0px] max-w-lg mx-auto bg-white rounded-md p-6 shadow-xl z-30 hover:shadow-blue transition-all">
                <button
                  className={`w-full p-3 text-[16px] leading-7 rounded-md text-black mb-2 ${
                    tab === 'overview' ? 'bg-lightBlue-100 text-royalBlue-500' : 'hover:bg-lightBlue-100 hover:text-royalBlue-500 transition-all'
                  }`}
                  onClick={() => setTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`w-full p-3 text-[16px] leading-7 rounded-md text-black mb-2 ${
                    tab === 'appointments' ? 'bg-lightBlue-100 text-royalBlue-500' : 'hover:bg-lightBlue-100 hover:text-royalBlue-500 transition-all'
                  }`}
                  onClick={() => setTab('appointments')}
                >
                  Appointments
                </button>
                <button
                  className={`w-full p-3 text-[16px] leading-7 rounded-md text-black mb-20 ${
                    tab === 'profile' ? 'bg-lightBlue-100 text-royalBlue-500' : 'hover:bg-lightBlue-100 hover:text-royalBlue-500 transition-all'
                  }`}
                  onClick={() => setTab('profile')}
                >
                  Profile
                </button>
                <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white mb-4">
                  Logout
                </button>
                <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">Delete account</button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <p className="flex items-center p-4 rounded bg-[#fff9ea] mb-5">
                <HiInformationCircle className="mr-2 h-7 w-7" />
                To get approved, please complete your profile. We'll review manually and approve within 3 days.
              </p>

              {tab === 'overview' && <Overview />}
              {tab === 'appointments' && <Appointments />}
              {tab === 'profile' && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
