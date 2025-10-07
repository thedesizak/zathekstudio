import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-end p-6">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-sm text-brand-blue">{item.category}</p>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-brand-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Featured Projects</h2>
          <p className="mt-4 text-lg text-brand-gray-200">A glimpse into our world of creation.</p>
          <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {PORTFOLIO_DATA.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
