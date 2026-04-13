import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaChevronUp } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-20 bg-transparent relative overflow-hidden">
      
      {/* Background Watermark Text - বড় করে পেছনে থাকবে */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 ">
        <h1 className="text-[10vw] md:text-[12vw] font-bold text-white/[0.03] uppercase tracking-[50px] leading-none">
          SHANTO
        </h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center relative z-10">
        
        {/* Logo & Identity */}
        <div className="flex flex-col items-center gap-4 mb-12 group">
          <div className="p-3 rounded-full border border-white/5 group-hover:border-[#8b1e2d]/50 transition-all duration-700">
             <img className="w-16 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src={logo} alt="logo" />
          </div>
        </div>

        {/* Floating Links */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm uppercase tracking-[4px] font-medium transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#8b1e2d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 mb-16">
          {[<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />, <FaGithub />].map((icon, index) => (
            <span 
              key={index}
              className="text-gray-500 hover:text-[#8b1e2d] text-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-white/50 text-[10px] uppercase tracking-[3px]">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          
          {/* Circular Back to Top */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:bg-[#8b1e2d] hover:text-white hover:border-[#8b1e2d] transition-all duration-500 group shadow-lg"
          >
            <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="text-gray-500 text-[10px] uppercase tracking-[3px]">
            Designed by <span className="text-gray-300">Hasibul Hassan Shanto</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;