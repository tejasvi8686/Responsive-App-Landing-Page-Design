import React from "react";
import Test from "@/public/assets/test.svg";
import Image from "next/image";
import { testimonial } from "@/constants/index";
import Star from "@/public/assets/start.svg";

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 sm:container relative">
      <div className="flex flex-col mx-auto text-center">
        <h3 className="text-lg font-bold">TESTIMONIAL</h3>
        <h1 className="sm:text-5xl text-3xl  font-bold">
          What Our Users <br /> Say About Us?
        </h1>
      </div>
      <div className="flex lg:flex-row items-center flex-col sm:pl-14 pl-5 sm:pr-14 pr-5">
        <Image src={Test} height={719} width={719} alt="ft" />
        <div className="flex flex-col gap-6">
          <h3 className="lg:text-[34px] text-[24px] font-semibold">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="sm:text-lg text-sm font-medium text-gray-700 dark:text-white">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="flex flex-row gap-4">
            {testimonial.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                height={image.height}
                width={image.width}
                alt={image.alt}
                className={image.className}
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-lg font-bold">Nicks Jonas</span>
        </div>
      </div>
      <Image
        src={Star}
        alt="Start"
        height={50}
        width={50}
        className="absolute bottom-0 -top-20 right-[20%] hidden md:block "
      />
       <Image
        src={Star}
        alt="Start"
        height={50}
        width={50}
        className="absolute bottom-10  hidden md:block "
      />
    </section>
  );
};

export default Testimonials;
