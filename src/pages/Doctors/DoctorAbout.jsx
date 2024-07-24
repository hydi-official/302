import React from 'react';
import { formateDate } from '../../utils/formateDate';



const DoctorAbout = ({ doctor }) => {
    if (!doctor) {
      // Handle loading state or display an error message
      return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">{`Dr. ${doctor.name}`}</span>
                </h3>
                <p className="text__para">{doctor.bio}
                </p>
            </div>

            <div className="mt-12">
    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
    <ul className="pt-4 md:p-5">
        <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{doctor.qstartdate} - {doctor.qenddate}</span>
                <p className="text-[14px] leading-6 font-medium text-textColor ">{doctor.qdegree}</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor ">{doctor.quniversity}</p>
        </li>


            {/* We'll make the education an array later */}
        {/* <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate('05-11-2005')} - {formateDate('11-03-2007')}</span>
                <p className="text-[14px] leading-6 font-medium text-textColor ">PHD in Dentistory</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor ">UGMC, Legon</p>
        </li> */}
    </ul>
</div>


            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                            {doctor.estartdate} - {doctor.eenddate}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">{doctor.eposition}</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor ">{doctor.euniversity}</p>
                    </li>

                    {/* We'll make the experiences an array later */}
                    {/* <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                            {formateDate('05-11-2005')} - {formateDate('11-03-2007')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">Sr. Surgeon</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor ">Prodigies clinic, Legon</p>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default DoctorAbout;
