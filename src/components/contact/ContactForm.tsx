"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Spinner from "../reusable/Spinner";

const ContactForm = ({
  subject,
  message,
}: {
  subject?: string;
  message?: string;
}) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: subject || "",
    message: message || "",
  });

  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setSending(false);
      setEmailSent(true);
      setFormData({
        name: "",
        email: "",
        subject: subject || "",
        message: message || "",
      });
    } else {
      setSending(false);
      setError(true);
    }
  };

  return (
    <form
      className="flex-1 flex flex-col gap-6 w-full mx-auto z-10"
      onSubmit={handleSubmit}
    >
      {/* input group */}
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input"
          onChange={(e) => handleChange(e)}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          onChange={(e) => handleChange(e)}
          value={formData.email}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="input"
        onChange={(e) => handleChange(e)}
        value={formData.subject}
      />
      <textarea
        placeholder="Message"
        name="message"
        className="textarea"
        onChange={(e) => handleChange(e)}
        value={formData.message}
      ></textarea>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <button
          type="submit"
          className="btn rounded-full border text-white border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
        >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Let&apos;s talk
          </span>
          <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
        </button>
        {sending && (
          <div className="flex flex-row gap-2 text-white w-full items-start ml-2">
            <p>Sending</p>
            <Spinner />
          </div>
        )}
        {emailSent && (
          <p className="text-green-700 font-semibold">
            We have received your email and will contact you as soon as
            possible!
          </p>
        )}
        {error && (
          <p className="text-red-700 font-semibold">
            There was an error sending the email. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};
export default ContactForm;
