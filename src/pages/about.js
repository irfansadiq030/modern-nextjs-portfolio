import React from "react";
import Head from "next/head";
import AboutSection from "@/components/Home/AboutSection";
import PageHeader from "@/components/PageHeader";

const about = () => {
  return (
    <>
      <Head>
        <title>
          Irfan Sadiq | Full Stack Developer | WordPress, ReactJS, Laravel
          Expert
        </title>
        <meta
          name="description"
          content="Irfan Sadiq - Full Stack Developer with 5+ years' experience in WordPress, ReactJS, PHP, Laravel & more. Offering expert web development services on Fiverr & Upwork."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, WordPress Expert, ReactJS Developer, PHP Developer, Laravel Developer, Web Development Services, Fiverr Level 2 Seller, Upwork Freelancer"
        />
      </Head>
      <PageHeader introText="About" mainHeading="Meet Irfan Sadiq" subHeading="Your Full Stack development partner" />
      <AboutSection />
      <section className="mb-24"></section>
    </>
  );
};

export default about;
