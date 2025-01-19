"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerUp } from "@/lib/motion";
import HamburgerNavbar from "./HamburgerNavbar";
import TransitionLink from "@/utils/pageTransition/TransitionLink";

export const navItems = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "What We Do",
    link: "/what-we-do",
  },
  {
    title: "Latest Projects",
    link: "/past-projects",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];
const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-[300] h-[65px] p-8 overflow-hidden flex items-center navbar">
      <div className="flex justify-between items-center w-full">
        <TransitionLink href={"/"}>
          <Image
            src="/logo.png"
            alt="Marquista Logo"
            width={220}
            height={44}
            className="object-cover w-[110] h-[22px] "
          />
        </TransitionLink>

        {/* Laptop */}
        <motion.div
          className="hidden md:flex items-center justify-center gap-4 text-white"
          variants={staggerUp}
          initial="initial"
          animate="animate"
          custom={0.1}
        >
          {navItems.map((item, index) => (
            <TransitionLink
              key={index}
              href={item.link}
              className="text-sm font-thin cursor-pointer hover:text-pop transition-all duration-300 z-50"
            >
              {item.title}
            </TransitionLink>
          ))}
        </motion.div>

        {/* Mobile */}
        <div className="block md:hidden">
          <HamburgerNavbar />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
