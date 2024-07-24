import React from 'react';
import aboutImg from '../../assets/images/about.png';
import home4 from '../../assets/images/home4.jpg';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-12">
        {/* About Main Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img src={home4} alt="About" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>

        {/* About Content */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-headingColor">
            Exceptional Care, Personalized for You
          </h2>
          <p className="text-lg lg:text-xl mb-6 text-gray-700 leading-relaxed">
            At Care Prime, our mission is to deliver unparalleled healthcare services with a focus on patient well-being. Our approach integrates cutting-edge technology with compassionate care to ensure that every patient receives the best treatment possible.
          </p>
          <p className="text-lg lg:text-xl mb-6 text-gray-700 leading-relaxed">
            We are committed to improving accessibility, convenience, and overall healthcare quality. By streamlining the appointment process and offering a seamless healthcare experience, we aim to contribute to longer, healthier lives.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h3 className="text-2xl font-bold text-headingColor mb-4">
              Get Started with Virtual Care
            </h3>
            <p className="text-base text-gray-600 mb-4">
              Enjoy the convenience of virtual consultations with our expert physicians. Schedule your appointment, find the right doctor, and get the care you need from the comfort of your home.
            </p>
            <a href="#" className="inline-block bg-primaryColor text-white py-2 px-4 rounded-lg text-base font-semibold hover:bg-primaryColorDark transition">
              Book a Virtual Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
