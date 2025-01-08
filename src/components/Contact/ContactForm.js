import React, { useState } from "react";
// import Button from "../views/Button";
// import { FaRegEnvelope } from "react-icons/fa6";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "irfansadiq00@gmail.com",
    message: "hi, I am testing the form",
  });
  const [responseMessage, setResponseMessage] = useState(""); // This state is used to display response messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_EMAIL_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        process.env.REACT_APP_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        () => {
          setResponseMessage("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setResponseMessage("Error sending message. Please try again.");
        }
      );
  };

  return (
    <article className="w-full">
      <h1 className="text-3xl text-white font-medium">
        Have Questions? Let’s Connect!
      </h1>
      <p className="text-white font-light mt-3 w-full md:w-9/12">
        I’m here to help! Whether you have questions about my services or want
        to discuss your next project, feel free to reach out. I’ll get back to
        you promptly!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex items-center mt-6 text-white">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-2 border-[#787878] w-full p-2 focus:outline-none rounded-[5px]"
              required
            />
          </div>
          <div className="flex items-center mt-6 text-white">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-2 border-[#787878] w-full p-2 focus:outline-none rounded-[5px]"
              required
            />
          </div>
          <div className="flex items-center mt-6 text-white col-span-2">
            <textarea
              rows={4}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-2 border-[#787878] w-full p-2 focus:outline-none rounded-[5px]"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 bg-accent text-white px-5 py-2 lg:py-3 text-md lg:text-xl rounded-[5px]"
        >
          Send Message
        </button>
      </form>
    </article>
  );
};

export default ContactForm;
