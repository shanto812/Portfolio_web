import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one - Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-white">
          {/* Updated: Tracking text color to Crimson Red */}
          <p className="text-sm text-[#ffffff] tracking-[4px]">2019 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education Quality</h2>
        </div>
        {/* Updated: Timeline border color to Crimson with low opacity */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-[#ffffff]/50 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Northern University Bangladesh (2023 - 2026)"
            result="3.25/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="DR Abdur Razzak Municipal College (2019 - 2021)"
            result="4.28/5"
            des="Higher education is tertiary education leading to award of an academic degree."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Bakospota High School (2014 - 2019)"
            result="4.25/5"
            des="Secondary education or post-primary education covers two phases on the ISCED scale."
          />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Education;