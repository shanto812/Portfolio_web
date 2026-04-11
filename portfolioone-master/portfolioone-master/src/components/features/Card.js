import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({title, des, icon}) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg flex items-center 
                    bg-gradient-to-br from-[#1e2024]/40 to-[#240b36]/20 
                    backdrop-blur-sm group hover:bg-gradient-to-b 
                    hover:from-[#c31432]/10 hover:to-[#240b36]/80 
                    transition-all duration-500 shadow-none border-none outline-none">
      
      {/* নিচের ডিভ থেকে h-72 সরিয়ে h-full করা হয়েছে এবং overflow-hidden নিশ্চিত করা হয়েছে 
         যাতে কোনো স্ক্রলবার না আসে।
      */}
      <div className="h-full w-full overflow-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
          
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-[#c31432] group-hover:text-white transition-colors duration-500">
                {icon}
              </span>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="w-full h-[2px] rounded-lg bg-[#c31432] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#c31432] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#c31432] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#c31432] inline-flex"></span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 group-hover:text-white">
              {title}
            </h2>
            <p className="text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-500 leading-6">
              {des}
            </p>
            <span className="text-2xl text-[#c31432] group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
              <HiArrowRight />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;