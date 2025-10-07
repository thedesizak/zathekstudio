import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://picsum.photos/seed/zatek-hero/1920/1080)' }}>
      <div className="absolute inset-0 bg-brand-gray-900 bg-opacity-70"></div>
      <div className="relative text-center text-white z-10 px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          ZATHEK
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto font-light text-brand-gray-200">
          Engineering Precision, Designing Reality.
        </p>
        <button
          onClick={handleScrollToPortfolio}
          className="mt-8 px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Our Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
