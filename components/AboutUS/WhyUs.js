import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import ButtonUp from "../Shared/Buttons/SecondaryButton";

const WhyUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const openImage = (i) => {
    setCurrentImg(i);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  const gotoPrevImg = () => {
    setCurrentImg(currentImg - 1);
  };

  const gotoNextImg = () => {
    setCurrentImg(currentImg + 1);
  };

  const modules = [
    {
      id: 1,
      name: "Specialized Expertise",
      features: [
        "Our team comprises seasoned professionals with specialized expertise in Amazon and 1688.com product data APIs, ensuring that your business receives tailor-made solutions that align perfectly with the unique requirements of e-commerce.",
      ],
    },
    {
      id: 2,
      name: "Holistic Approach",
      features: [
        "Unlike other companies, EcomService doesn't just stop at API sales. We offer a holistic approach to web development, seamlessly integrating your API solutions into a fully optimized and responsive website. From user experience to functionality, we ensure every aspect is finely tuned for success.",
      ],
    },
    {
      id: 3,
      name: "Innovation at the Core",
      features: [
        "At EcomService, we thrive on innovation. Our commitment to staying at the forefront of technological advancements allows us to provide you with cutting-edge solutions that give your business a competitive edge in the dynamic world of e-commerce.",
      ],
    },
    {
      id: 4,
      name: "Reliability and Scalability",
      features: [
        "Our solutions are built with reliability and scalability in mind. Whether you're a startup looking to establish your online presence or an established business aiming for expansion, our services are designed to grow with you.",
      ],
    },
    {
      id: 5,
      name: "Client-Centric Approach",
      features: [
        "Your success is our success. EcomService takes pride in its client-centric approach, ensuring that we not only meet but exceed your expectations. Our dedicated team works closely with you, understanding your goals and tailoring solutions that best suit your business objectives.",
      ],
    },
    {
      id: 6,
      name: "Quality Assurance",
      features: [
        "We uphold the highest standards of quality assurance throughout our processes. From coding to implementation, every step is meticulously reviewed to guarantee the delivery of a seamless and bug-free solution.",
      ],
    },
    {
      id: 7,
      name: "Timely Delivery",
      features: [
        "Time is of the essence in the fast-paced world of e-commerce. EcomService is committed to delivering projects on time, without compromising on quality. Our streamlined processes and efficient team ensure that your business operations remain on schedule.",
      ],
    },
    {
      id: 7,
      name: "Cost-Effective Solutions",
      features: [
        "We understand the importance of cost-effectiveness in business operations. EcomService offers competitive pricing without compromising on the quality of our services, ensuring that you get maximum value for your investment.",
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Why Us - Ecomservice</title>
      </Head>
      <div className="card  rounded-none lg:grid lg:grid-cols-2 md:gap-4">
        <figure className="col-span-1">
          <img className="max-h-96" src="/images/whyus.jpg" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-4xl">Ecomservice</h2>
          <p className="font-semibold">IT SOLUTIONS FOR ECOMMERCE</p>
          <p>
            Welcome to EcomService, your premier destination for comprehensive
            IT solutions that elevate your online presence and drive
            unparalleled success. As a dynamic IT company specializing in Amazon
            and 1688.com product data API sales, coupled with expert full web
            development services, we at EcomService stand out as your preferred
            partner for a myriad of reasons.
          </p>
        </div>
      </div>

      <div className=" py-5">
        <h2 className="text-center md:text-5xl text-2xl  ">
          Elevate Your E-Commerce Journey with EcomService :
        </h2>
        <div className=" ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            {modules?.map((module, i) => (
              <div key={i} className="card mx-auto  m-0 ">
                <div className="card-body py-5 px-0  hover:">
                  <h2 className="font-semibold md:text-2xl text-xl text-center">
                    {module?.name}
                  </h2>
                  {module?.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <p>
          Choose EcomService as your IT partner, and embark on a journey of
          digital transformation that propels your business to new heights. With
          a commitment to excellence, innovation, and client satisfaction, we go
          above and beyond to make your e-commerce venture a resounding success.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
