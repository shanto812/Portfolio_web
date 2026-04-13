import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-[#1a0828] to-[#1a0828]/40 p-4 lgl:p-8 rounded-lg border border-white/10 flex flex-col gap-8 justify-center shadow-2xl backdrop-blur-sm">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2 grayscale hover:grayscale-0 duration-500 cursor-pointer border border-[#8b1e2d]/20"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        {/* Updated Name and Role color to match new theme */}
        <h3 className="text-3xl font-bold text-white">Hasibul Hassan Shanto</h3>
        <p className="text-lg font-normal text-[#8b1e2d]">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide leading-6">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-gray-200">+880 17XXXXXXXX</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-gray-200">shanto@example.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300">Find me in</h2>
        <div className="flex gap-4">
          {/* Social Icons with hover theme matching #8b1e2d */}
          <span className="w-16 h-16 bg-[#141518] text-gray-400 text-xl inline-flex items-center justify-center rounded-lg hover:text-[#8b1e2d] hover:border-[#8b1e2d] border border-transparent duration-300 cursor-pointer shadow-lg">
            <FaFacebookF />
          </span>
          <span className="w-16 h-16 bg-[#141518] text-gray-400 text-xl inline-flex items-center justify-center rounded-lg hover:text-[#8b1e2d] hover:border-[#8b1e2d] border border-transparent duration-300 cursor-pointer shadow-lg">
            <FaTwitter />
          </span>
          <span className="w-16 h-16 bg-[#141518] text-gray-400 text-xl inline-flex items-center justify-center rounded-lg hover:text-[#8b1e2d] hover:border-[#8b1e2d] border border-transparent duration-300 cursor-pointer shadow-lg">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;