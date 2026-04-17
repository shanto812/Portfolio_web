import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col 
                    bg-gradient-to-br from-[#1e2024]/50 to-[#240b36]/30 
                    backdrop-blur-sm border border-white/5
                    group hover:bg-gradient-to-b hover:from-[#c31432]/10 hover:to-[#240b36]/90 
                    transition-all duration-500 shadow-none">
      
      {/* ইমেজ সেকশন - হালকা গ্লোসহ */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg relative">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-500 cursor-pointer"
          src={src}
          alt="src"
        />
        {/* ইমেজের ওপর হালকা একটি লালচে লেয়ার আসবে হোভার করলে */}
        <div className="absolute inset-0 bg-[#c31432]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-[#c31432] font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-[#1e2024] inline-flex justify-center items-center text-gray-400 hover:text-[#c31432] hover:shadow-[0_0_15px_rgba(195,20,50,0.5)] duration-300 cursor-pointer border border-white/5">
                <BsGithub />
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-[#1e2024] inline-flex justify-center items-center text-gray-400 hover:text-[#c31432] hover:shadow-[0_0_15px_rgba(195,20,50,0.5)] duration-300 cursor-pointer border border-white/5">
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-gray-400 group-hover:text-gray-200 duration-300 leading-6">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;