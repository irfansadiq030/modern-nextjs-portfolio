import React from "react";
import Head from "next/head";
import AboutSection from "@/components/Home/AboutSection";
import PageHeader from "@/components/PageHeader";

const contact = () => {
  return (
    <>
      <Head>
        <title>
          Contact Irfan Sadiq | Full-Stack Developer for Web Solutions
        </title>
        <meta
          name="description"
          content="Get in touch with Irfan Sadiq, a full-stack developer with 5+ years' experience in WordPress, React, PHP, and Laravel. Let's discuss your next project today!"
        />
        <meta
          name="keywords"
          content="Contact Irfan Sadiq, full-stack developer, hire web developer, WordPress expert, React developer, Laravel developer, web development services, freelance developer"
        />
      </Head>
      <PageHeader
        introText="Contact"
        mainHeading="Contact Me Today"
        subHeading="Let’s Build Something Great Together"
      />
      <section className="mb-24"></section>
    </>
  );
};

export default contact;
