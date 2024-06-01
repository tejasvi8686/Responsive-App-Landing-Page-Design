import React from "react";
import Image, { StaticImageData } from "next/image";

interface CommonProps {
  title: string;
  subtitle: string;
  description: string;
  featuresImage: StaticImageData;
  icon: StaticImageData;
  iconAlt: string;
  iconText: string;
  propstyling?: string;
}

const Common: React.FC<CommonProps> = ({
  title,
  subtitle,
  description,
  featuresImage,
  icon,
  iconAlt,
  iconText,
  propstyling = "",
}) => {
  return (
    <section className="bg-white dark:bg-gray-900 sm:container ">
      <div className={`flex lg:flex-row items-center flex-col ${propstyling} sm:pl-14 pl-5 sm:pr-14 pr-5`}>
        <div>
          <div className="sm:mb-9 mb-5">
            <h3 className="text-lg font-medium text-[#ff5555]">{subtitle}</h3>
            <h1 className="sm:text-5xl text-3xl font-bold">{title}</h1>
          </div>
          <div className="flex flex-row gap-4 items-center sm:mb-7 mb-5">
            <Image src={icon} height={48} width={48} alt={iconAlt} loading="lazy" />
            <span className="text-lg font-semibold">{iconText}</span>
          </div>
          <div>
            <p className="sm:text-lg text-sm font-medium text-gray-700 dark:text-white">
              {description}
            </p>
          </div>
        </div>
        <Image src={featuresImage} height={719} width={719} alt="features" />
      </div>
    </section>
  );
};

export default Common;
