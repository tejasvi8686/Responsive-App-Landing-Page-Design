'use client'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from "@/public/assets/start.svg";
import Image from "next/image";
// import { faqItems } from "@/constants";

export const faqItems = [
  {
    id: 1,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-[#ff5555]",
    textColor: "text-white dark:text-black",
  },
  {
    id: 2,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-[#ff5555]",
    textColor: "text-white dark:text-black",
  },
  {
    id: 4,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: 5,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-[#ff5555]",
    textColor: "text-white dark:text-black",
  },
  {
    id: 6,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const Faq = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopContent = (
    <div className="flex lg:flex-row flex-col-reverse gap-5">
      <div className="flex flex-col gap-4">
        {faqItems.slice(0, 3).map((item) => (
          <div key={item.id} className={`${item.bgColor} px-7 py-7 rounded-lg`}>
            <h3 className={`text-2xl font-semibold ${item.textColor}`}>
              {item.title}
            </h3>
            <p className={`font-medium text-lg ${item.textColor}`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {faqItems.slice(3).map((item) => (
          <div key={item.id} className={`${item.bgColor} px-7 py-7 rounded-lg`}>
            <h3 className={`text-2xl font-semibold ${item.textColor}`}>
              {item.title}
            </h3>
            <p className={`font-medium text-lg ${item.textColor}`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const mobileContent = (
    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
      {faqItems.map((item) => (
        <div key={item.id} className={`${item.bgColor} px-7 py-7 rounded-lg`}>
          <h3 className={`text-2xl font-semibold ${item.textColor}`}>
            {item.title}
          </h3>
          <p className={`font-medium text-lg ${item.textColor}`}>
            {item.content}
          </p>
        </div>
      ))}
    </Slider>
  );

  return (
    <section className="bg-white dark:bg-gray-900 sm:container mx-auto">
      <div className="sm:px-10  px-6 sm:py-9 py-14">
        <div className="flex flex-row items-center lg:gap-60 gap-9">
          <div className="mb-9">
            <h3 className="text-lg font-medium text-[#ff5555]">FAQ</h3>
            <h1 className="font-bold sm:text-5xl text-2xl">
              Frequently Asked <br /> Questions
            </h1>
          </div>
          <Image src={Star} alt="Star" height={50} width={50} className="" />
        </div>
        {isMobile ? mobileContent : desktopContent}
      </div>
    </section>
  );
};

export default Faq;
