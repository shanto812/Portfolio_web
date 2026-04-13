import React, { useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Message has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full mt-10">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-10">
          <ContactLeft />
          
          <div className="w-full lgl:w-[60%] h-full py-10 bg-[#1a0828]/40 backdrop-blur-sm flex flex-col gap-8 p-4 lgl:p-8 rounded-lg border border-white/10 shadow-2xl">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              
              {errMsg && (
                <p className="py-3 bg-[#8b1e2d]/20 border border-[#8b1e2d]/50 text-center text-red-400 text-base tracking-wide animate-pulse rounded-lg">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-500/10 border border-green-500/50 text-center text-green-400 text-base tracking-wide animate-bounce rounded-lg">
                  {successMsg}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">Your name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="w-full h-12 rounded-lg border-b-[1px] border-b-[#8b1e2d]/50 bg-[#1a0828]/60 text-white px-4 outline-none focus-within:border-[#8b1e2d] duration-300"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="w-full h-12 rounded-lg border-b-[1px] border-b-[#8b1e2d]/50 bg-[#1a0828]/60 text-white px-4 outline-none focus-within:border-[#8b1e2d] duration-300"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full h-12 rounded-lg border-b-[1px] border-b-[#8b1e2d]/50 bg-[#1a0828]/60 text-white px-4 outline-none focus-within:border-[#8b1e2d] duration-300"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="w-full h-12 rounded-lg border-b-[1px] border-b-[#8b1e2d]/50 bg-[#1a0828]/60 text-white px-4 outline-none focus-within:border-[#8b1e2d] duration-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="w-full rounded-lg border-b-[1px] border-b-[#8b1e2d]/50 bg-[#1a0828]/60 text-white px-4 py-2 outline-none focus-within:border-[#8b1e2d] duration-300 resize-none"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#0b0313] rounded-lg text-base text-gray-300 tracking-wider uppercase hover:text-white duration-300 hover:bg-[#8b1e2d] border border-[#8b1e2d]/20 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
   <div className="flex flex-col gap-6 lgl:gap-10 py-5 lgl:py-10">
   {/* কন্টেন্ট ছাড়াই শুধু গ্যাপ তৈরি করার জন্য */}
</div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/50 gap-60"></div>
    </section>
    
  );
}

export default Contact;