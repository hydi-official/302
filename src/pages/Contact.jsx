import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaTag, FaComments } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xbjnlolo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Form submitted successfully!');
        setFormData({
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
    }
  };

  return (
    <section className="bg-gray-50 py-16 flex flex-col lg:flex-row lg:space-x-12">
      {/* Contact Form */}
      <div className="container mx-auto p-6 max-w-screen-md bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-8">
          Have a question or feedback? Fill out the form below to get in touch with us.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-400" size={24} />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="form__input flex-1"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <FaTag className="text-gray-400" size={24} />
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="form__input flex-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="flex items-center space-x-4">
              <FaComments className="text-gray-400" size={24} />
              <span className="text-gray-800">Message</span>
            </label>
            <textarea
              rows="6"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave your message here..."
              className="form__input mt-1"
            />
          </div>

          <button type="submit" className="btn rounded-lg py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="flex-1 mt-10 lg:mt-0 lg:ml-10 border rounded-lg overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.089714910857!2d-0.20418654458009414!3d5.6372680000000175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c8307e0600d%3A0xc50b55ed2b95e9ff!2sAlexander%20Kwapong%20Hall!5e0!3m2!1sen!2sgh!4v1706620194238!5m2!1sen!2sgh"
          width="100%"
          height="430"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
