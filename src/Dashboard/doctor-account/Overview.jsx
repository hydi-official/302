import React from 'react';
import DoctorAbout from '../../pages/Doctors/DoctorAbout';
import home8 from '../../assets/images/home8.jpg';
import useGetProfile from '../../hooks/usefetchData';
import { BASE_URL } from '../../config';
import starIcon from '../../assets/images/Star.png';
import Loading from '../../components/Loader/Loading';
import Profile from './Profile';
import { formateDate } from '../../utils/formateDate';
import Error from '../../components/Error/Error';
import { useLocation } from 'react-router-dom';


const Overview = () => {
  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);



console.log("UserData:", userData);

  

  return (
    <section>
      <div className="max-w-[1178px] px-5 mx-auto">

        {loading && !error && <Loading />}

        {error && !loading && <Error errorMessage={error} />}

        {!loading && !error && (
        
            <div className="pb-[50px] px-[38px] rounded-md">

              <div>
                <div className="flex items-center gap-5">
                  <figure className="max-w-[150px] max-h-[150px] mb-4">
                    <img src={userData.photo} alt="" className="full" />
                  </figure>
                  <div>
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-12px leading-4 lg:text-16px lg:leading-7 font-semibold rounded">
                    {userData.specialization}
                    </span>
                    <h3 className="text-headingColor text-22px leading-9 mt-3 font-bold">{userData.name}</h3>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-14px leading-5 lg:text-16px lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="" /> 4.8
                      </span>
                      <span className="text-14px leading-5 lg:text-16px lg:leading-7 font-[400] text-text-Color">(272)</span>
                    </div>
                  </div>
                </div>

                <div>

                <div>
              
                <h3 className="text-[20px] leading-[30px] mt-8 text-headingColor font-semibold flex items-center gap-2">
                  About of
                  <span className="text-irisBlueColor font-bold text-[24px] leading-9">{userData.name}</span>
                </h3>
                <p className="text__para mt-2">{userData.bio}</p>
              </div>

              <div className="mt-12">
              <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
              <ul className="pt-4 md:p-5">
           
                    <li  className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                      <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                          {userData.qstartdate} - {userData.qenddate}
                        </span>
                        <p className="text-[14px] leading-6 font-medium text-textColor ">{userData.qdegree}</p>
                      </div>
                      <p className="text-[14px] leading-5 font-medium text-textColor ">{userData.quniversity}</p>
                    </li>
              
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
              <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
         
                    <li  className="p-4 rounded bg-[#fff9ea]">
                      <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                        {userData.estartdate} - {userData.eenddate}
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor ">{userData.eposition}</p>
                      <p className="text-[14px] leading-5 font-medium text-textColor ">{userData.euniversity}</p>
                    </li>
             
              </ul>
            </div>
        </div>

              </div>
            </div>
          
        )}
      </div>
    </section>
  );
};

export default Overview;
