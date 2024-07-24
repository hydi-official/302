import React from 'react';
import home4 from '../assets/images/hero.png';
import illustration1 from '../assets/images/illustration1.jpeg';
import illustration2 from '../assets/images/illustration2.jpeg';
import illustration3 from '../assets/images/illustration3.jpeg';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import FaqList from "../components/Faq/FaqList";
import Testimonial from '../components/Testimonial/Testimonial';
import hphero from '../assets/images/hphero.jpg';
const Home = () => {
    return (
        <>
            {/* ====== Hero Section ====== */}
            <section
                className="relative pt-[300px] min-h-screen bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${home4})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay for better text visibility */}
                <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Prolonging Lifespan through Health Initiatives
                        </h1>
                        <p className="text-lg text-white mb-6">
                            Empowering patients to easily schedule visits with healthcare providers and enhance overall well-being.
                        </p>
                        <Link to="/appointments">
                            <button className="btn btn-primary">Request an Appointment</button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* ====== Hero Section End ====== */}

            {/* ====== Introduction Section ====== */}
            <section className="bg-blue-100 py-8 px-4 rounded-lg shadow-lg">
                <p className="text-base font-semibold text-center">
                    Care Prime is a transformative project designed to streamline healthcare appointments, empowering patients to easily schedule visits with healthcare providers. This user-friendly platform enhances patient access, reduces wait times, and promotes proactive healthcare.
                </p>
            </section>

            {/* ====== Features Section ====== */}
            <section className="py-10">
                <div className="container">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Providing the Best Medical Services</h2>
                    <p className="text-base text-center mb-12">
                        Committed to delivering exceptional healthcare solutions that prioritize patient well-being and aim to enhance the overall quality of healthcare services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={illustration1} alt="Find a Location" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Find a Location</h3>
                                <p className="text-base mb-4">
                                    With our healthcare application, you can effortlessly find the nearest healthcare facilities and their locations.
                                </p>
                                <Link to='/doctors' className="flex items-center text-blue-600 hover:underline">
                                    <span className="mr-2">Learn More</span>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={illustration2} alt="Book Appointment" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
                                <p className="text-base mb-4">
                                    Streamline the appointment booking process with our user-friendly platform to schedule your appointments with healthcare providers.
                                </p>
                                <Link to='/appointments' className="flex items-center text-blue-600 hover:underline">
                                    <span className="mr-2">Learn More</span>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={illustration3} alt="Find a Doctor" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Find a Doctor</h3>
                                <p className="text-base mb-4">
                                    Quickly find the right doctor for your needs with our easy-to-use platform, and book appointments with just a few clicks.
                                </p>
                                <Link to='/doctors' className="flex items-center text-blue-600 hover:underline">
                                    <span className="mr-2">Learn More</span>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== FAQ Section ====== */}
            <section className="py-10 md:py-20 lg:py-32 bg-gray-100">
                <div className="container">
                    <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-0">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Most Questions by Our Beloved Patients
                            </h2>
                            <FaqList />
                        </div>

                        <div className="w-full md:w-1/2">
                            <img src={hphero} alt="FAQ" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== Testimonial Section ====== */}
            <section className="py-10">
                <div className="container">
                    <Testimonial />
                </div>
            </section>
        </>
    );
};

export default Home;
