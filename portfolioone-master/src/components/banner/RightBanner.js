import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative overflow-hidden lgl:overflow-visible">
      
      {/* ইউনিক এলিমেন্ট ১: কালার গ্লো।
        ইমেজের ঠিক পেছনে, মাঝখানে একটি খুব সফট, বড় গ্লো-ইফেক্ট, যা কালার দুটোকে সুন্দরভাবে মিশিয়ে দেবে।
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[100%] h-[100%] lgl:w-[800px] lgl:h-[800px] 
                      bg-gradient-to-r from-[#c31432]/20 to-[#240b36]/40 
                      rounded-full blur-[100px] z-0">
      </div>
      <div className="relative w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 
                      p-2 flex justify-center items-center">
          <div className="absolute inset-0 
                          bg-gradient-to-br from-[#a811ee] to-[#8a0611]
                          rounded-[60%_40%_30%_70%/_60%_30%_70%_40%] 
                          shadow-[0_20px_60px_-10px_rgba(195,20,50,0.4),0_10px_30px_-5px_rgba(36,11,54,0.3)]
                          border border-[#c31432]/20">
          </div>

         
          <img
            className="absolute inset-0 w-full h-full object-contain drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.5)] rounded-full"
            src={bannerImg}
            alt="bannerImg"
          />
      </div>

    </div>
  );
}

export default RightBanner