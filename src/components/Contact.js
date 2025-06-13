import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below and our team will
          get back to you soon.
        </p>

        <form className="bg-gray-50 shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
