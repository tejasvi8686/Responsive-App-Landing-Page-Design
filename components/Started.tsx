"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Iphone from "@/public/assets/phone12.svg";
import { Button } from "./ui/button";
import Whitestar from "@/public/assets/whitestar.svg";
import BG12 from "@/public/assets/bgbg1.svg";
import Border1 from "@/public/assets/border1.svg";
import Border2 from "@/public/assets/border2.svg";
import RGBM from "@/public/assets/rgbm.svg";

const Started = () => {
  return (
    <section className="g-white dark:bg-gray-900 py-14 sm:container">
      <div className="sm:px-10 px-5 sm:py-5 py-9 sm:mt-10 mt-0">
        <div className="bg-black sm:pl-9 sm:pr-0 pl-6 pr-6 py-10 rounded-lg relative">
          <div className="flex lg:flex-row flex-col justify-between items-center sm:gap-0 gap-4">
            <div className="flex flex-col gap-4">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="sm:text-5xl text-3xl text-white font-bold font-clash-display"
              >
                Ready To Get Started ?
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-white text-lg font-clash-display" 
              >
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </motion.p>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <Button className="text-black border-0 bg-white hover:bg-slate-300 focus:ring-4 font-medium text-sm px-8 py-3 text-center  rounded-md mr-8 sm:w-[35%] w-[60%] cursor-pointer font-clash-display">
                  Download App
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 26 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5273 16.8217C21.4939 12.827 24.8032 10.8799 24.9573 10.7929C23.0815 8.06286 20.1742 7.68815 19.1492 7.66139C16.7041 7.40716 14.3393 9.12011 13.0933 9.12011C11.8271 9.12011 9.91117 7.68815 7.84121 7.72834C5.18165 7.76845 2.69631 9.30746 1.33641 11.6895C-1.4772 16.554 0.61963 23.7002 3.31934 27.6346C4.6658 29.5617 6.24014 31.7096 8.30346 31.6359C10.3198 31.5556 11.0768 30.3512 13.5086 30.3512C15.9203 30.3512 16.6303 31.6359 18.7339 31.5891C20.8977 31.5556 22.2643 29.6553 23.5639 27.7149C25.1248 25.5068 25.7478 23.3322 25.7746 23.2251C25.721 23.1916 21.5676 21.6059 21.5273 16.8217ZM17.5548 5.0719C18.6401 3.71361 19.3836 1.87354 19.176 0C17.6084 0.0668761 15.6389 1.08394 14.5134 2.40884C13.5153 3.57978 12.6176 5.49343 12.8521 7.29339C14.6072 7.4205 16.4227 6.40344 17.5548 5.0719Z"
                      fill="black"
                    />
                  </svg>
                </Button>
              </motion.div>
            </div>
            <motion.div initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }} className="z-10">
              <Image
                src={Iphone}
                height={459}
                width={591}
                alt="iphone"
                loading="lazy"
                className="z-10"
              />
            </motion.div>
          </div>
          <Image
            src={Whitestar}
            alt="Start"
            height={50}
            width={50}
            className="absolute lg:bottom-[80%] bottom-[86%] right-[15%]  lg:right-[45%] "
            loading="lazy"
          />
          <Image
            src={Whitestar}
            alt="Start"
            height={50}
            width={50}
            className="absolute bottom-[23%] right-[64%] rotate-45"
            loading="lazy"
          />
          <Image
            src={BG12}
            alt="Start"
            height={222}
            width={306}
            className="absolute sm:bottom-0 bottom-[-28px] lg:left-[70%] left-[11%] z-0 sm:rotate-180 rotate-0"
            loading="lazy"
          />
          <Image
            src={Border1}
            alt="Start"
            height={410}
            width={410}
            className="absolute bottom-0 right-3 top-0 z-0"
            loading="lazy"
          />
          <Image
            src={Border2}
            alt="Start"
            height={419}
            width={419}
            className="absolute bottom-0 left-1  z-0"
            loading="lazy"
          />

          <Image
            src={RGBM}
            alt="Start"
            height={237}
            width={327}
            className="absolute bottom-0 top-[-133px] left-[-140px] -z-10 rotate-180"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Started;
