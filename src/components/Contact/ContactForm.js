import React from 'react'
import Button from '../views/Button';
import { FaRegEnvelope } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <article className="w-full">
      <h1 className="text-3xl text-white font-medium">
        Have Questions? Let’s Connect!
      </h1>
      <p className="text-white font-light mt-3 w-9/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <form>
        <div className="flex items-center mt-10 text-white">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-2 border-white w-full p-2 focus:outline-none rounded-[5px]"
          />
        </div>
        <div className="flex items-center mt-6 text-white">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-b-2 border-white w-full p-2 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex items-center mt-6 text-white">
          <textarea
            placeholder="Message"
            className="bg-transparent border-b-2 border-white w-full p-2 focus:outline-none focus:border-primary"
          ></textarea>
        </div>
        <Button
          Icon={FaRegEnvelope}
        //   iconPosition='right'
          btnText="Send Message"
          bgColor={true}
          className="mt-8 bg-accent text-white px-5 py-2 lg:py-3 text-md lg:text-xl"
        />
      </form>
    </article>
  );
}

export default ContactForm
