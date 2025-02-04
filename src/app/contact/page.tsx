"use client";
import { useState } from "react";


export default function Contact(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form submission logic here
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };


  return(
      <div className="min-h-screen bg-gradient-to-r  from-pink-50 via-black-100 to-pink-200 ">
          
          <div className="bg-white shadow:cyan-600 rounded-lg mb-6 mt-0 p-4 md:p-10 max-w-4xl mx-auto">
              
              <form onSubmit={handleSubmit}  className="space-y-4 bg-slate-200 shadow-md shadow-pink-200 rounded-lg p-5">
              <div>
              <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="mt-2 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-300 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-700 transition-all"
              >
                Send Message
              </button>
            </div>
              </form>
          </div>
          
      </div>
  )
};

