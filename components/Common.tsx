import React from "react";
import Image from "next/image";
import FeaturesImage from "@/public/assets/features.svg";

const Common = () => {
  return (
    <div>
      <section className=" bg-white dark:bg-gray-900">
        <div className="flex sm:flex-row items-center flex-col-reverse sm:px-10 px-5">
        <Image src={FeaturesImage} height={719} width={719} alt="ft" />
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#ff5555]">ADVANTAGES</h3>
            <h1 className="sm:text-5xl text-3xl  font-bold">Why Choose Uifry</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
