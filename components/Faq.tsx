import React from "react";
import Star from "@/public/assets/start.svg";
import Image from "next/image";

const Faq = () => {
  return (
    <section className=" bg-white dark:bg-gray-900 sm:container hidden:container ">
      <div className="sm:px-10 px-5 sm:py-5 py-9">
        <div className="flex flex-row items-center sm:gap-60 gap-9">
          <div className=" mb-9">
            <h3 className="text-lg font-medium text-[#ff5555]">FAQ</h3>
            <h1 className="font-bold lg:text-5xl text-3xl">
              Frequently Asked <br /> Questions
            </h1>
          </div>

          <Image src={Star} alt="Start" height={50} width={50} className="" />
        </div>

        <div className="flex lg:flex-row flex-col-reverse gap-5 ">
          <div className="flex flex-col gap-4">
            <div className="bg-[#ff5555] px-7 py-7 rounded-lg">
              <h3 className="text-2xl font-semibold text-white dark:text-black">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="font-medium text-lg text-white dark:text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-white px-7 py-7 rounded-lg">
              <h3 className="text-2xl font-semibold  text-black">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="font-medium text-lg  text-black ">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-[#ff5555] px-7 py-7 rounded-lg">
              <h3 className="text-2xl font-semibold text-white dark:text-black">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="font-medium text-lg text-white dark:text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="bg-white px-7 py-7 rounded-lg">
              <h3 className="text-2xl font-semibold text-black">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="font-medium text-lg text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-[#ff5555] px-7 py-7 rounded-lg">
              <h3 className="text-2xl font-semibold  text-white dark:text-black">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="font-medium text-lg text-white dark:text-black ">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-white px-7 py-7 rounded-lg">
              <h3 className="text-2xl font-semibold text-black">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="font-medium text-lg text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
