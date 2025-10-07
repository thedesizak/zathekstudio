import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-brand-gray-800 p-8 rounded-lg shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
    <div className="mb-6">{service.icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
    <p className="text-brand-gray-200 leading-relaxed">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Expertise</h2>
          <p className="mt-4 text-lg text-brand-gray-200">We deliver excellence across the digital creation spectrum.</p>
          <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
