import React from 'react';
import { FaHeartbeat, FaBrain, FaAmbulance, FaFireExtinguisher, FaStethoscope } from 'react-icons/fa';
import home4 from '../assets/images/serviceb.webp'; // Ensure this image path is correct

const services = [
  {
    name: "Cancer Care",
    desc: "Expert care for cancer treatment. Our team provides personalized and comprehensive services for all stages of cancer.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
    icon: <FaHeartbeat size={32} color="#FEB60D" />,
  },
  {
    name: "Labor & Delivery",
    desc: "Top-notch care for labor and delivery, ensuring the best outcomes for mothers and newborns.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
    icon: <FaAmbulance size={32} color="#9771FF" />,
  },
  {
    name: "Heart & Vascular",
    desc: "Specialized heart and vascular care, including treatment and prevention of cardiovascular diseases.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
    icon: <FaStethoscope size={32} color="#01B5C5" />,
  },
  {
    name: "Mental Health",
    desc: "Support for mental health and wellness, offering therapy and counseling services.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
    icon: <FaBrain size={32} color="#01B5C5" />,
  },
  {
    name: "Neurology",
    desc: "Comprehensive care for neurological conditions, including diagnosis and treatment of brain and nerve disorders.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
    icon: <FaBrain size={32} color="#FEB60D" />,
  },
  {
    name: "Burn Treatment",
    desc: "Expert treatment for burn injuries, offering both immediate and long-term care.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
    icon: <FaFireExtinguisher size={32} color="#9771FF" />,
  },
];

const Services = () => {
  return (
    <section>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${home4})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-lg md:text-xl font-light">
            Providing top-notch healthcare services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <div className="w-full sm:w-11/12 mt-10 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="mb-4 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold" style={{ color: service.textColor }}>{service.name}</h3>
              <p className="text-center mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
