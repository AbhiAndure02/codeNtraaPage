import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b via-[#AFDD] to-[#0FA4AF]  from-[#024950] min-h-screen flex items-center justify-center relative ">
      
      {/* Background Image */}

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-6xl bg-black/20 rounded-2xl shadow-2xl p-12 border border-white/20 transition-transform hover:scale-95 duration-1000 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 transform-3d">
          
          {/* Left Section - Contact Info */}
          <div className="space-y-8 text-white">
            <h2 className="text-5xl font-bold text-slate-900 stroke-text1">Let's Connect</h2>
            <p className="text-lg text-slate-900 ">
              We are here to help you grow your business. Reach out for collaborations, inquiries, or just to say hello! 
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#FCBF49] stroke-text text-2xl" />
                <p className="text-lg text-slate-900">+91 9371635526 / 8484957731</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#FCBF49] stroke-text text-2xl" />
                <p className="text-lg text-slate-900">business@codentraa.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#FCBF49] stroke-text text-2xl" />
                <p className="text-lg text-slate-900">tech@codentraa.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#FCBF49] stroke-text text-2xl" />
                <p className="text-lg text-slate-900">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-black/10  p-8 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
            
            <form className="space-y-5">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FCBF49] text-black placeholder-black transition-shadow hover:shadow-lg"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-[#FCBF49] text-black placeholder-black  transition-shadow hover:shadow-lg"
              />
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-[#FCBF49] text-black placeholder-black transition-shadow hover:shadow-lg"
              />
              
              <button 
                type="submit" 
                className="w-full bg-[#FCBF49] text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-[#f8d77d] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
