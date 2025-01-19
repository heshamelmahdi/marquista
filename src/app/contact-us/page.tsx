"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  openFacebookPage,
  openInstagramPage,
  openWhatsAppChat,
} from "@/utils/socialActions";
import ContactForm from "@/components/contact/ContactForm";
import LiftUpBorders from "@/components/ui/buttons/lift-up-borders";

const Contact = () => {
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
      id="contact"
      className="m-10 mt-20 lg:m-20 flex items-center gap-4 flex-col overflow-x-hidden"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-mainTurquoise tracking-tighter">
        Contact Us
      </h1>
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-2">
        {contacts.map((cont, idx) => (
          <LiftUpBorders key={idx} text={cont.text} onClick={cont.link} />
        ))}
      </div>
      <div className="container mx-auto text-center xl:text-left flex flex-col items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] pb-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
