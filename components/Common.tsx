"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CommonProps {
  title: string;
  subtitle: string;
  description: string;
  featuresImage: StaticImageData;
  icon: StaticImageData;
  icon2: StaticImageData;
  iconAlt: string;
  iconText: string;
  propstyling?: string;
  styling?: string;
}

const Common: React.FC<CommonProps> = ({
  title,
  subtitle,
  description,
  featuresImage,
  icon,
  icon2,
  iconAlt,
  iconText,
  propstyling = "",
  styling = "",
}) => {
  return (
    <section className="bg-white dark:bg-gray-900 sm:container relative ">
      <div
        className={`flex lg:flex-row items-center flex-col ${propstyling} sm:pl-14 pl-5 sm:pr-14 pr-5`}
      >
        <div>
          <div className="sm:mb-9 mb-5">
            <motion.h3
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-lg font-medium font-clash-display text-[#ff5555]"
            >
              {subtitle}
            </motion.h3>
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
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
              {title}
            </motion.h1>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-row gap-4 items-center sm:mb-7 mb-5"
          >
            <Image
              src={icon}
              height={48}
              width={48}
              alt={iconAlt}
              loading="lazy"
            />
            <span className="text-lg font-clash-display font-semibold">{iconText}</span>
          </motion.div>
          <div>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="sm:text-lg text-sm font-medium text-gray-700 dark:text-white font-clash-display"
            >
              {description}
            </motion.p>
          </div>
        </div>
        <motion.div initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}>
   
          <Image src={featuresImage} height={3000} width={3000} alt="features" />
        </motion.div>
      </div>
      <Image
        src={icon2}
        alt="Start"
        height={50}
        width={50}
        className={`absolute bottom-0 ${styling} hidden md:block `}
      />
    </section>
  );
};

export default Common;
