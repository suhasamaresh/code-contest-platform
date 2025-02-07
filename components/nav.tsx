"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="py-4 bg-neutral-900">
      {/* Responsive wrapper: adjust max width and horizontal padding */}
      <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl px-4">
        {/* The navbar container is fully rounded with a border */}
        <div className="bg-neutral-700 border border-neutral-600 rounded-full p-1">
          <SlideTabs />
        </div>
      </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="relative flex w-full items-center justify-center md:gap-2 rounded-full"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Tracks</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Timeline</Tab>
      <Tab setPosition={setPosition}>Sponsors</Tab>
      <Tab setPosition={setPosition}>FAQ's/Contacts</Tab>

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 cursor-pointer px-2 py-1 text-xs uppercase text-white md:px-3 md:py-2 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-emerald-500 md:h-12"
    />
  );
};
