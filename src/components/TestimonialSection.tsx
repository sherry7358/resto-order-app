
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Emma Wilson",
    text: "The food was exceptional and the atmosphere was perfect for our anniversary dinner. We'll definitely be returning!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Brown",
    text: "Absolutely fantastic dining experience. The chef's tasting menu was a culinary journey I won't soon forget.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    text: "Impeccable service and wonderful food. The wine pairing recommendations were spot on.",
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container-custom">
        <h2 className="section-heading text-center">What Our Guests Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-primary' : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.585l-5.994 3.174 1.148-6.678L.28 7.232l6.6-.96L10 0l3.12 6.272 6.6.96-4.874 4.849 1.148 6.678L10 15.585z"
                    />
                  </svg>
                ))}
              </div>
              
              <p className="italic mb-4">"{testimonial.text}"</p>
              
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
