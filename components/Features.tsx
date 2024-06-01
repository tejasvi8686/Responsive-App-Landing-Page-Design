import React from "react";
import Image from "next/image";
import FeaturesImage from "@/public/assets/features.svg"

const Features = () => {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="flex sm:flex-row  flex-col-reverse items-start ">
        <Image src={FeaturesImage} height={719} width={719} alt="ft" />
        <div>
            <h3></h3>
            <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default Features;
