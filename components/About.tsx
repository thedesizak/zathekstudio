import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">About ZATHEK</h2>
            <div className="mb-6 w-24 h-1 bg-brand-blue rounded"></div>
            <p className="text-brand-gray-200 mb-4 leading-relaxed">
              ZATHEK is a creative powerhouse where innovation meets artistry. We are a collective of passionate designers, modelers, and artists dedicated to pushing the boundaries of digital creation. Our philosophy is simple: merge cutting-edge technology with timeless design principles to deliver unparalleled results.
            </p>
            <p className="text-brand-gray-200 leading-relaxed">
              From initial concept to final render, we collaborate closely with our clients to bring their visions to life. We believe in a partnership built on communication, creativity, and a relentless pursuit of perfection.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/about-us/800/600" 
              alt="ZATHEK Studio workspace" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
