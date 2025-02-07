"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define Tailwind colors directly
const colors = [
  "bg-sky-300",
  "bg-pink-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-red-300",
  "bg-purple-300",
  "bg-blue-300",
  "bg-indigo-300",
  "bg-violet-300",
];

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(40).fill(1); // Adjust number of rows
  const cols = new Array(80).fill(1); // Adjust number of columns

  const [hoveredBox, setHoveredBox] = useState<{ row: number; col: number } | null>(null);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
      }}
      className={cn(
        "absolute inset-0 flex items-center justify-center z-0",
        className
      )}
      {...rest}
    >
      <div className="flex flex-wrap w-full h-full">
        {rows.map((_, i) => (
          <motion.div
            key={`row${i}`}
            className="w-16 h-16 border-l border-t border-slate-700 relative"
          >
            {cols.map((_, j) => {
              const isHovered = hoveredBox?.row === i && hoveredBox?.col === j;
              return (
                <motion.div
                  whileHover={{
                    scale: 1.1, // Slight scale effect on hover
                  }}
                  key={`col${j}`}
                  className={`w-16 h-16 border-r border-b border-slate-700 relative ${
                    isHovered ? getRandomColor() : ''
                  }`}
                  onMouseEnter={() => setHoveredBox({ row: i, col: j })}
                  onMouseLeave={() => setHoveredBox(null)}
                >
                  {j % 2 === 0 && i % 2 === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="absolute h-6 w-10 top-0 left-0 text-slate-700 stroke-[1px] pointer-events-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  ) : null}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
