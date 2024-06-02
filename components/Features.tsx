import React from "react";
import Image from "next/image";
import FeaturesImage from "@/public/assets/features.svg";
import { features } from "@/constants/index";
import RGBM from "@/public/assets/rgbm.svg";
import Star from "@/public/assets/start.svg";

const Features = () => {
  return (
    <section className=" bg-white dark:bg-gray-900 sm:container relative">
      <div className="flex lg:flex-row items-center flex-col-reverse sm:mb-[-100px] sm:px-10 px-5">
        <Image src={FeaturesImage} height={700} width={700} alt="ft" />
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#ff5555]">FEATURES</h3>
            <h1 className="sm:text-5xl text-3xl  font-bold">Uifry Premium</h1>
          </div>
          <div className="flex flex-col gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-row gap-2 mb-2">
                  <Image
                    src={item.src}
                    height={24}
                    width={24}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <span className="text-lg font-semibold text-black dark:text-white">
                    {item.title}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-white">
                  {item.description}
                </p>
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
