import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';



const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
    phoneNumber: "",
    bio: "",
    specialization: "",
    ticketPrice: "",
    about: "",

  qstartdate: "",
qenddate: "",
qdegree: "",
quniversity: "",

estartdate: "",
eenddate: "",
edegree: "",
euniversity: "",

tday: "",
tstarttime: "",
tendtime: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
      phoneNumber: user.phoneNumber || "",
      bio: user.bio,
      specialization: user.specialization,
      ticketPrice: user.ticketPrice,
      about: user.about,
      
      qstartdate: user.qstartdate ,
qenddate: user.qenddate  ,
qdegree: user.qdegree ,
quniversity: user.quniversity ,

estartdate: user.estartdate  ,
eenddate: user.eenddate  ,
eposition: user.eposition ,
euniversity:  user.euniversity,

tday: user.tday ,
tstarttime: user.tstarttime ,
tendtime: user.tendtime  ,
    }));
  }, [user]);
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const updatedFormData = {
        ...formData
      };

      const res = await fetch(`${BASE_URL}/doctors/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFormData),
      });

      const { message, updatedUser } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);

      navigate('/doctors/profile/me', {
        state: {
          user: updatedUser,
        
        },
      });
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

 

 

  

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-5">Profile Information</h1>
      <form onSubmit={submitHandler}>

      <div className="mb-5">
  Name*
  <input
    type="text"
    placeholder="Full Name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
    required
  />
</div>


        <div className="mb-5">
          Email*
          <input
            type="email"
            placeholder="doctor@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
            cursor-pointer"
            
          />
        </div>

        <div className="mb-5">
          Phone*
          <input
            type="text"
            placeholder="PhoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
            cursor-pointer"
          />
        </div>

       

        

<div className="mb-5 flex items-center justify-between">
  <label className="text-headingColor font-bold text-[16px] leading-7">
    Gender:
    <select
      name="gender"
      value={formData.gender}
      onChange={handleInputChange}
      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3">
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </label>

  {/* Add Specialization select field */}
  <div className="ml-4">
    <label className="text-headingColor font-bold text-[16px] leading-7">
      Specialization:
      <select
        name="specialization"
        value={formData.specialization}
        onChange={handleInputChange}
        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3">
        {/* Add specialization options as needed */}
        <option value="">Select</option>
      <option value="Cancer Care">Cancer Care</option>
      <option value="Labor & Delivery">Labor & Delivery</option>
      <option value="Mental Health">Mental Health</option>
      <option value="Neurology">Neurology</option>
      <option value="Burn Treatment">Burn Treatment</option>
      <option value="Heart and Vascular">Heart and Vascular</option>

      </select>
    </label>
  </div>

  {/* Add Ticket Price input field */}
  <div className="ml-4">
    <label className="text-headingColor font-bold text-[16px] leading-7">
      Ticket Price:
      <input
        type="text"
        placeholder="0$"
        name="ticketPrice"
        value={formData.ticketPrice}
        onChange={handleInputChange}
        className="w-[100px] pr-4 py-3 border-b border-solid border-[#0066ff61] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
      />
    </label>
  </div>
</div>



<div className="mb-5">
  Qualification*
</div>
<div className="mt-3">
  <button
    type="button"
    className="w-[200px] bg-[#181A1E] text-white text-[18px] leading-[38px] rounded-lg px-1 py-2"
  >
    Add Qualification
  </button>
</div>

        <div  className="qualification-form mt-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-4">
              <label>Start Date*</label>
              <input
  type="date"
  value={formData.qstartdate}
  onChange={handleInputChange}
  name="qstartdate" // Add name attribute
  className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
/>

</div>
              <div className="w-1/2 px-2 mb-4">
                <label>End Date*</label>
                <input
                  type="date"
                  value={formData.qenddate}
                  onChange={handleInputChange}
                  name="qenddate" // Add name attribute
              
                  className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
                />
              
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label>Degree*</label>
                <input
      type="text"
      name="qdegree" // Add name attribute
      placeholder="degree"
      value={formData.qdegree}
      onChange={handleInputChange}
      
      className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
    />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label>University*</label>
                <input
                  type="text"
                  name="quniversity" // Add name attribute
                  placeholder="university"
                  value={formData.quniversity}
                                    onChange={handleInputChange}
               
                  className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
                />
              </div>
      <AiOutlineDelete
        className="text-red-500 cursor-pointer"
        size={20}
      />
    </div>
  </div>

  



        {/* Add Experiences */}


        <div className="mb-0">Experience*</div>
<div className="mt-3">
  <button
    type="button"
    className="w-[200px] bg-[#181A1E] text-white text-[18px] leading-[38px] rounded-lg px-1 py-2"
  >
    Add Experience
  </button>
</div>

        <div  className="experience-form mt-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-4">
              <label >Start Date*</label>
              <input
                type="date"
                name="estartdate"
                value={formData.estartdate}
                onChange={handleInputChange}
                className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
              />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label>End Date*</label>
                <input
                  type="date"
                  value={formData.eenddate}
                  onChange={handleInputChange}
                  name="eenddate" // Add name attribute
              
                  className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
                />
              
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label>Position*</label>
                <input
                  type="text"
                  name="eposition"
                  value={formData.eposition}
                  onChange={handleInputChange}
                  
                
                  className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label>University*</label>
                <input
                  type="text"
                  placeholder="university"
                  name="euniversity"
                  value={formData.euniversity}
                  onChange={handleInputChange}
               
                  className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
                />
              </div>
      <AiOutlineDelete
        className="text-red-500 cursor-pointer"
        size={20}
      />
    </div>
  </div>

<div className="mt-3">
  <button
    type="button"
    className="text-red-500 cursor-pointer"
  >
    Clear All Experiences
  </button>
</div>


       
<div className="mb-0">Time Slot*</div>
<div className="flex flex-wrap mt-3">
  <button
    type="button"
    className="w-[200px] bg-[#181A1E] text-white text-[18px] leading-[38px] rounded-lg px-1 py-2 mr-3"
  >
    Add Time Slot
  </button>

    <div  className="time-slot-form flex items-center mr-3">
       <div className="mb-0">Time Slot</div>

<div className="mt-2 mr-3"></div>

<div className="w-1/2 px-2 mb-4">
<label>Day of the Week*</label>
<select
        value={formData.tday}
        onChange={handleInputChange}
        name="tday"

className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor">
<option value="">Select</option>
<option value="Monday">Monday</option>
<option value="Tuesday">Tuesday</option>
<option value="Wednesday">Wednesday</option>
<option value="Thursday">Thursday</option>
<option value="Friday">Friday</option>
<option value="Saturday">Saturday</option>
<option value="Sunday">Sunday</option>
</select>
</div>
<div className="w-1/2 px-2 mb-4">
  <label >Start Time*</label>
  <input
    type="time" // Change the type to "time"
    onChange={handleInputChange}
    value={formData.tstarttime}
    name="tstarttime"

    className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
  />
</div>

<div className="w-1/2 px-2 mb-4">
  <label>End Time*</label>
  <input
    value={formData.tendtime}
    type="time" // Change the type to "time"
    onChange={handleInputChange}
    name="tendtime"
    className="w-full border-b border-solid border-[#0066ff61] text-[16px] leading-7 placeholder:text-textColor"
  />
</div>
      <AiOutlineDelete
        className="text-red-500 cursor-pointer"
        size={20}
      />
    </div>
</div>







           <div className="sm:col-span-2 mt-7">
           <label htmlFor="message" className="form__label">
              About*
            </label>
          <textarea
            type="text"
            rows="6"
            id="message"
            placeholder="Write about yourself....."
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full form__input mt-1 pr-4 py-3 border-b border-solid border-[#0066ff61] 
            text-[16px] leading-7 text-headingColor placeholder:text-textColor
            cursor-pointer"
          />
        </div>

          <div className="mb-5 flex items-center gap-3">
        {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
            <img src={formData.photo} alt="" className="w-full rounded-full"/>
        </figure>}

        <div className="relative w-[130px] h-[50px]">
            <input type="file" 
            name="photo"
            id="customFile"
            onChange={handleFileInputChange}
            accept=".jpg, .png"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label htmlFor="customFile" className=" absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[o.375rem]
            text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                {selectedFile ? selectedFile.name : 'upload Photo'}
            </label>

        </div>

        </div>

        <div className="mt-7">
        <button 
        disabled={loading && true}
        type="submit"
        className="w-full bg-primaryColor text-white text-[18px] leading-[38px] rounded-lg px-4 py-3">
            {loading ? <HashLoader size={25} color="#ffffff"/> : 'Update Profile'}
            </button>
    </div>

      </form>
    </div>
  );
};

export default Profile;
