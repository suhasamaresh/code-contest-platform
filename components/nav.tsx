"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-[#f3f0e0] dark:text-white"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div layout className="w-max h-full p-4">
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-[#361737] shadow-input flex justify-center space-x-6 px-10 py-6"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-4">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[12rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black"
        >
            {children}
        </Link>
    );
};

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center ">
            <Navbar className="top-2 " />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={`fixed top-10 inset-x-0  max-w-2xl mx-auto z-50 ${className}`}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Contests">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/contests">Upcoming Contests</HoveredLink>
                        <HoveredLink href="/past-contests">Past Contests</HoveredLink>
                        <HoveredLink href="/create-contest">Create Contest</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Leaderboard">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/leaderboard">Top Performers</HoveredLink>
                        <HoveredLink href="/weekly-challenges">Weekly Challenges</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Community">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/forum">Forum</HoveredLink>
                        <HoveredLink href="/resources">Resources</HoveredLink>
                        <HoveredLink href="/support">Support</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Profile">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/my-submissions">My Dashboard</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}




<div className="w-1/2 flex flex-col justify-center items-center">
  <img
    src="/hello.webp"
    alt="Descriptive Alt Text"
    className="w-[500px] h-[300px] mb-6 border-[10px] border-transparent bg-gradient-to-br from-[#0a1609] to-transparent"
  />
  <div className="p-10 bg-transparent ml-14 mr-14 relative border border-transparent bg-gradient-to-b from-transparent to-transparent border-gradient-to-r from-[#f3f0e0] to-[#f3f0e0]">
    <div className="absolute -top-4 -left-4 w-4 h-4 bg-gradient-to-br from-[#0a1609] to-transparent"></div>
    <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-to-bl from-[#0a1609] to-transparent"></div>
    <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-tr from-[#0a1609] to-transparent"></div>
    <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-gradient-to-tl from-[#0a1609] to-transparent"></div>
    <p className="text-3xl mb-6 text-center px-10">
      <span className="text-[#fe8afe]">&lt;/ Code &gt;</span> Like
      Ambedkar Wrote the Constitution – Error-Free and Revolutionary!
    </p>
    <div className="flex justify-center">
      <button
        className="px-6 py-2 bg-[#2a6e28] rounded-full hover:bg-[#183717]"
        type="button"
      >
        Check Out Contests
      </button>
    </div>
  </div>
</div>






