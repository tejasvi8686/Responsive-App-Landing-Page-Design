"use client";
import React from "react";
import Image from "next/image";
import FeaturesImage from "@/public/assets/features.svg";
import { features } from "@/constants/index";
import RGBM from "@/public/assets/rgbm.svg";
import Star from "@/public/assets/start.svg";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className=" bg-white dark:bg-gray-900 sm:container relative">
      <div className="flex lg:flex-row items-center flex-col-reverse sm:mb-[-100px] sm:px-10 px-5">
        <motion.div initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}>
        <Image src={FeaturesImage} height={1000} width={1000} alt="ft" />
        </motion.div>
        <div>
          <div className="mb-8">
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-lg font-medium text-[#ff5555] font-clash-display"
            >
              FEATURES
            </motion.h3>
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
              className="sm:text-5xl text-3xl font-clash-display font-bold"
            >
              Uifry Premium
            </motion.h1>
          </div>
          <div className="flex flex-col gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col">
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
                  className="flex flex-row gap-2 mb-2"
                >
                  <Image
                    src={item.src}
                    height={24}
                    width={24}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="text-lg font-semibold text-black dark:text-white font-clash-display"
                  >
                    {item.title}
                  </motion.span>
                </motion.div>
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
                  className="text-sm font-medium text-gray-700 dark:text-white font-clash-display"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={RGBM}
        alt="Start"
        height={237}
        width={327}
        className="absolute bottom-0 top-[20%] right-[-10%] rotate-180 hidden md:block"
        loading="lazy"
      />

      <Image
        src={Star}
        alt="Start"
        height={50}
        width={50}
        className="absolute bottom-0 top-20 hidden md:block "
      />
    </section>
  );
};

export default Features;
