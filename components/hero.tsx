"use client";
import React from "react";
import Typewriter from 'typewriter-effect';

export default function SignUpSection() {
  return (
    <section className="w-full bg-[#f3f0e0] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-6xl font-bold text-[#f3f0e0] mb-6 inline-block bg-[#1c1c1c] px-2">
          <span className="text-[#50da4c]">&lt;/</span>Compete<span className="text-[#50da4c]">&gt;</span>
        </h2>
        <h2 className="text-6xl font-thin text-[#f3f0e0] mb-6 flex items-center bg-[#1c1c1c] mr-40">
          <span className="inline-block mr-2">Within</span>
          <span className="inline-block">
          <Typewriter
            options={{
              strings: ["College", "Peer Groups"],
              autoStart: true,
              loop: true,
            }}
          />
          </span>
        </h2>
        <p className="text-xl text-[#333333] leading-relaxed">
          Join Dr. AIT’s DSA Platform for coding contests and practice. Get the latest updates 
          and notifications straight to your inbox.
        </p>
      </div>

      {/* Right Section - Card */}
      <div className="md:w-1/3 w-full flex justify-center text-left text-lg">
        <div className="bg-[#50da4c] p-8 shadow-lg w-full max-w-xl font-thin">
          <h3 className=" text-lg text-[#1c1c1c] mb-4">
          Keep your connection to open source strong! Join other members of the open-source community in lively discussion on the Hacktoberfest Discord.
          </h3>
          
            <button
              type="submit"
              className=" w-2/5 bg-[#183717] text-white py-3 rounded-full hover:bg-[#2a6e28] transition-all duration-300"
            >
              Join Discord
            </button>
        </div>
      </div>
    </section>
  );
}
