import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      // Updated: BG matches #1a0828 and Hover matches #8b1e2d
      className="w-14 h-12 bg-[#1a0828] hover:bg-[#8b1e2d] duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-none border border-white/5 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      // Updated: BG matches #1a0828 and Hover matches #8b1e2d
      className="w-14 h-12 bg-[#730ec0] hover:bg-[#110442] duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-none border border-white/5 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div>
        <ul style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                // Updated: Active dot now uses #8b1e2d
                background: "#8b1e2d",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0 0 10px #8b1e2d"
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      // Updated: Border color to match Deep Maroon with low opacity
      className="w-full py-10 border-b-[1px] border-b-[#ffff]/50 gap-60"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {[testimonialOne, testimonialTwo, testimonialOne].map((img, index) => (
            <div className="w-full" key={index}>
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                
                {/* Profile Card with New Gradient */}
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-[#5f0d9e] to-[#8b1e2d]/20 p-8 rounded-lg border border-white/5 flex flex-col md:flex-row lgl:flex-col gap-8 justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover shadow-lg"
                    src={img}
                    alt="testimonialImg"
                  />
                  <div className="w-full flex flex-col justify-end">
                    {/* Highlight Text color updated to #8b1e2d */}
                    <p className="text-xs uppercase text-[#8b1e2d] tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold text-gray-200">Jone Duone Joe</h3>
                    <p className="text-base tracking-wide text-gray-400">
                      Operation Officer
                    </p>
                  </div>
                </div>
                
                {/* Review Content with New Gradient */}
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32 opacity-20" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-br from-[#560991] to-[#8b1e2d]/20 rounded-lg border border-white/5 p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8 shadow-shadowOne">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-[#8b1e2d]/20">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-gray-200">
                          Travel Mobile App Design.
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Excellent work! The design perfectly aligns with our brand vision. 
                      Looking forward to more collaborations.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;