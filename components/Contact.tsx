import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert('Thank you for your message! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-brand-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get In Touch</h2>
          <p className="mt-4 text-lg text-brand-gray-200">Have a project in mind? Let's create something amazing together.</p>
          <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto rounded"></div>
        </div>
        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-brand-gray-700 border border-brand-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-brand-gray-700 border border-brand-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full bg-brand-gray-700 border border-brand-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
