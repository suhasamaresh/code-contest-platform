// app/page.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";

interface props{
  cardRef: React.RefObject<HTMLDivElement>,
  cursor: { x: number, y: number }
}

export default function Page() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>)=> {
    if(cardsRef.current != null) {
      const rect = cardsRef.current.getBoundingClientRect();
      setCursor({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  }

  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })

  useEffect(() => {
    if (cardsRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardsRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.y / cardRect.height) * 100
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor, cardsRef]);


  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-8 font-poppins">
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            stroke-opacity: 1;
          }
          50% {
            stroke-opacity: 0;
          }
        }
        .blink {
          animation: blink 2.5s infinite;
        }
      `}</style>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Introduction */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-500">
            Hack Colossus
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-neutral-400">
            Unleash your inner innovator at Hack Colossus – where creativity
            meets code in a battle of ideas! Join fellow tech enthusiasts to
            build, break, and reinvent tomorrow's solutions.
          </p>
          <p className="mt-2 text-neutral-500">
            Experience a hackathon like no other: immersive challenges,
            collaborative spirit, and a platform to transform your wildest ideas
            into reality. Let's hack the future together!
          </p>
        </div>

        {/* Right Section: Card with SVG */}
        <div className="flex items-center justify-center" >
          <div className="bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-lg p-6 shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-neutral-200 mb-4">
              Our Colossal Vision
            </h2>
            <p className="text-neutral-500 mb-4">
              Dive into the iconic spirit of ancient architecture reimagined for
              modern innovation. Let the energy of history inspire your
              breakthrough.
            </p>
            </div>
            {/* Hacker SVG */}
            <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64px"
                  height="64px"
                  viewBox="0 0 48 48"
                >
                  <title>hacker</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                      <rect width="48" height="48" fill="none" />
                    </g>
                    <g
                      id="Q3_icons"
                      data-name="Q3 icons"
                      className="blink"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                    >
                      <g>
                        <path d="M39.2,16h0L37.3,6.2A4,4,0,0,0,33.4,3H29.1a3.9,3.9,0,0,0-3.4,1.9L24,7.8,22.3,4.9A3.9,3.9,0,0,0,18.9,3H14.6a4,4,0,0,0-3.9,3.2L8.7,16C4.6,17.2,2,19,2,21s1.9,3.2,5,4.4V40.2a1.9,1.9,0,0,0,1.5,1.9l12,2.9a2.4,2.4,0,0,0,2.1-.8L24,42.5l1.4,1.7A2.1,2.1,0,0,0,27,45h.5l12-2.9A1.9,1.9,0,0,0,41,40.2V25.4c3.1-1.2,5-2.7,5-4.4S43.4,17.2,39.2,16ZM37,38.6l-9.2,2.2L25.6,38a2.2,2.2,0,0,0-3.2,0l-2.2,2.8L11,38.6v-12A55,55,0,0,0,24,28a55,55,0,0,0,13-1.4ZM24,24c-8.8,0-14.8-1.7-17.1-3a16.5,16.5,0,0,1,3-1.2l2.3-.7.5-2.4L14.6,7h4.3l1.7,2.8a3.9,3.9,0,0,0,6.8,0L29.1,7h4.3l1.9,9.7.5,2.4,2.3.7a16.5,16.5,0,0,1,3,1.2C38.8,22.3,32.8,24,24,24Z"/>
                        <path d="M17,32c-2,0-4-.1-4,1s2,3,4,3,4-.9,4-2S19,32,17,32Z"/>
                        <path d="M31,36c2,0,4-1.9,4-3s-2-1-4-1-4,.9-4,2S29,36,31,36Z"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center" ref = {cardsRef} onMouseMove = {event => handleMouseMove(event)} onMouseEnter = {() => setMouseOnCard(true)} onMouseLeave = {() => setMouseOnCard(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="none"
                height="400px"
                width="600px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <defs>
                  <radialGradient id = "emeraldGradient" gradientUnits="userSpaceOnUse" cx={gradientCenter.cx} cy={gradientCenter.cy} r="256">
                    {mouseOnCard && <stop stopColor="#10b981" />}
                    <stop offset={1} stopColor="#404040" />
                  </radialGradient>
                </defs>
                <g transform="translate(1 1)">
                  <g>
                    <path className="fill-neutral-950/50" stroke="url(#emeraldGradient)" strokeLinecap="round" strokeLinejoin="round" d="M511,331.8c0-11.491-6.963-20.833-17.067-24.224V202.424C504.037,199.033,511,189.691,511,178.2    c0-14.507-11.093-25.6-25.6-25.6H347.019L307.907,44.227c-2.56-6.827-9.387-11.093-16.213-11.093H33.133    c-9.387,0-17.067,7.68-17.067,17.067v103.776C5.963,157.367-1,166.709-1,178.2c0,11.491,6.963,20.833,17.067,24.224v105.152    C5.963,310.967-1,320.309-1,331.8c0,11.491,6.963,20.833,17.067,24.224V459.8H7.533c-5.12,0-8.533,3.413-8.533,8.533    s3.413,8.533,8.533,8.533H24.6h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2H485.4h17.067    c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-8.533V356.024C504.037,352.633,511,343.291,511,331.8z M33.133,50.2    h258.56l36.693,102.4h-39.253v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8v-51.2    c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2    c0-18.773-15.36-34.133-34.133-34.133C65.56,67.267,50.2,82.627,50.2,101.4v51.2H33.133V50.2z M272.068,101.4v51.2h-0.001h-34.133    v-51.2c0-9.387,7.68-17.067,17.067-17.067C264.388,84.333,272.068,92.013,272.068,101.4z M186.734,101.4v51.2h-0.001H152.6v-51.2    c0-9.387,7.68-17.067,17.067-17.067C179.054,84.333,186.734,92.013,186.734,101.4z M101.401,101.4v51.2H101.4H67.267v-51.2    c0-9.387,7.68-17.067,17.067-17.067C93.721,84.333,101.401,92.013,101.401,101.4z M101.401,459.8H67.267v-51.2    c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M186.734,459.8H152.6v-51.2    c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M272.067,459.8h-34.134v-51.2    c0-9.387,7.68-17.067,17.067-17.067s17.067,7.68,17.067,17.067V459.8z M357.401,459.8h-34.134v-51.2    c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M442.734,459.8H408.6v-51.2    c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M476.866,459.8H459.8v-51.2    c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133    s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8    v-51.2c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2    c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2H33.133V357.4h443.733V459.8z M485.4,340.333    H24.6c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2    H485.4c5.12,0,8.533,3.413,8.533,8.533S490.52,340.333,485.4,340.333z M425.667,220.867c-18.773,0-34.133,15.36-34.133,34.133    v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067V255    c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8V255c0-18.773-15.36-34.133-34.133-34.133    c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133    C65.56,220.867,50.2,236.227,50.2,255v51.2H33.133V203.8h443.733v102.4H459.8V255C459.8,236.227,444.44,220.867,425.667,220.867z     M442.734,255v51.2h-0.001H408.6V255c0-9.387,7.68-17.067,17.067-17.067C435.054,237.933,442.734,245.613,442.734,255z M357.4,255    v51.2h-34.133V255c0-9.387,7.68-17.067,17.067-17.067C349.721,237.933,357.4,245.613,357.4,255z M272.068,255v51.2h-0.001h-34.133    V255c0-9.387,7.68-17.067,17.067-17.067C264.388,237.933,272.068,245.613,272.068,255z M186.734,255v51.2h-0.001H152.6V255    c0-9.387,7.68-17.067,17.067-17.067C179.054,237.933,186.734,245.613,186.734,255z M101.401,255v51.2H101.4H67.267V255    c0-9.387,7.68-17.067,17.067-17.067C93.721,237.933,101.401,245.613,101.401,255z M485.4,186.733H24.6    c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h59.733H485.4    c5.12,0,8.533,3.413,8.533,8.533S490.52,186.733,485.4,186.733z" />
                  </g>
                </g>
              </svg>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
