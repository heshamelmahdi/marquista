"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  openFacebookPage,
  openInstagramPage,
  openWhatsAppChat,
} from "@/utils/socialActions";
import LiftUpButton from "./ui/buttons/lift-up-borders";
import Footer from "./Footer";

const ContactUs = () => {
  const contClassName = "flex gap-2 items-center justify-center";
  const contacts = [
    {
      text: (
        <span className={contClassName}>
          Message <FaWhatsapp />
        </span>
      ),
      link: () => openWhatsAppChat(),
    },
    {
      text: (
        <span className={contClassName}>
          Message <FaInstagram />
        </span>
      ),
      link: () => openInstagramPage(),
    },
    {
      text: (
        <span className={contClassName}>
          Message <FaFacebookF />
        </span>
      ),
      link: () => openFacebookPage(),
    },
  ];

  return (
    <section
      id="contact-us"
      className="flex flex-col z-50 bg-black pt-20 items-center gap-8"
    >
      <h1 className="text-3xl md:text-5xl text-mainTurquoise">Contact Us</h1>
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-2 mb-10">
        {contacts.map((cont, idx) => (
          <LiftUpButton key={idx} text={cont.text} onClick={cont.link} />
        ))}
      </div>
      <Footer />
    </section>
  );
};
export default ContactUs;
