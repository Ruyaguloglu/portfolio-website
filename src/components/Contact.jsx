import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope  }  from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0F172A] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: Contact Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s work <span className="text-purple-400">together.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I’m open to freelance projects, collaboration opportunities, or just a friendly hello.
            Fill in the form or drop an email , I’ll get back to you soon.
          </p>
          
        </div>
      

        {/* RIGHT: Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#1E293B] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#1E293B] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-[#1E293B] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>


    {/* Social Icons */}
    <div className="mt-16 flex justify-center space-x-8 text-2xl text-white">
      <a
        href="https://www.linkedin.com/in/rüya-güloğlu-950b3b234/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400 transition"
      >
        <FaLinkedin />
      </a>
   <a
          href="https://github.com/Ruyaguloglu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
 <a
          href="gulogluruya2@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>
    </div>
    </section>
  );
};

export default Contact;
