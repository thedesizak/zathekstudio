import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray-900 border-t border-brand-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-sm text-brand-gray-200">
            &copy; {new Date().getFullYear()} ZATHEK Studio. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {/* Replace with actual social links */}
            <a href="#" className="text-brand-gray-200 hover:text-brand-blue transition-colors">LinkedIn</a>
            <a href="#" className="text-brand-gray-200 hover:text-brand-blue transition-colors">ArtStation</a>
            <a href="#" className="text-brand-gray-200 hover:text-brand-blue transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
