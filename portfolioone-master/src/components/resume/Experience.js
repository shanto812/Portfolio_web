import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* Updated: Tracking text color to Crimson Red */}
          <p className="text-sm text-[#c31432] tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">Job Experience</h2>
        </div>
        {/* Updated: Left timeline border color match with theme */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-[#ffff]/50 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer"
            subTitle="CMIT Bangladesh - (2024 - 2025)"
            result="Bangladesh"
            des="Bangladesh has a large pool of young, tech-savvy talent, making it an attractive destination for software development outsourcing."
          />
          <ResumeCard
            title="Freelancing"
            subTitle="freelancer  (2022 - 2025)"
            result="Self "
            des="Freelancing offers flexibility and the opportunity to work on diverse projects, allowing individuals to build a varied portfolio and gain experience in different industries."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;