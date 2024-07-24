import React from 'react';
import home6 from '../../assets/images/home6.jpg';
import { HiStar } from 'react-icons/hi';

const reviews = [
  {
    name: "Muhibur Rahman",
    message: "I have taken medical services from them. They treat so well and they are providing the best medical services.",
    image: home6,
    rating: 5
  },
  {
    name: "Jane Doe",
    message: "The staff was exceptional and the facilities were top-notch. Highly recommended!",
    image: home6,
    rating: 5
  },
  {
    name: "Jane Doe",
    message: "The staff was exceptional and the facilities were top-notch. Highly recommended!",
    image: home6,
    rating: 5
  }
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 lg:px-8">
      <h2 className="text-center text-3xl font-bold mb-8 text-headingColor">What Our Patients Say</h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            style={{ maxWidth: '400px', margin: '0 auto' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="text-xl font-semibold text-headingColor">{review.name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-500 w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-center">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
