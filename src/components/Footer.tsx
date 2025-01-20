import { staggerUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { navItems } from "./navbar/Navbar";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  openAstraWebs,
  openFacebookPage,
  openInstagramPage,
} from "@/utils/socialActions";
import Image from "next/image";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      id="footer"
      className={cn(
        "w-[80vw] flex flex-col items-center justify-center gap-2 p-0 mt-6",
        className
      )}
    >
      <div className="w-full h-full overflow-hidden flex justify-start">
        <Image
          src="/logo.png"
          alt="Marquista Logo"
          width={2843}
          height={597}
          className="w-[220px] h-[44px]"
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-between w-full">
        <Copyright />
        <NavLinks />
        <SocialLinks />
      </div>

      {/*  Mobile */}
      <div className="flex md:hidden flex-col justify-between gap-3 w-full items-center">
        <NavLinks />
        <div className="flex justify-between w-full">
          <Copyright />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const Copyright = () => {
  return (
    <div className="text-sm text-white font-thin w-fit min-w-44">
      Site by{" "}
      <span
        className="cursor-pointer hover:underline transition-all duration-700"
        onClick={() => openAstraWebs()}
      >
        AstraWebs
      </span>{" "}
      &copy; {new Date().getFullYear()}
    </div>
  );
};

const NavLinks = () => {
  return (
    <motion.div
      className="w-full flex items-center justify-start md:justify-center gap-4 text-white"
      variants={staggerUp}
      initial="initial"
      animate="animate"
      custom={0.1}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-xs md:text-sm font-thin cursor-pointer hover:text-primary transition-all duration-300 z-50"
        >
          {item.title}
        </Link>
      ))}
    </motion.div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <FaFacebook
        className="text-white text-2xl hover:text-mainTurquoise transition duration-300 cursor-pointer"
        onClick={() => openFacebookPage()}
      />
      <AiFillInstagram
        className="text-white text-2xl hover:text-mainTurquoise transition duration-300 cursor-pointer"
        onClick={() => openInstagramPage()}
      />
    </div>
  );
};
