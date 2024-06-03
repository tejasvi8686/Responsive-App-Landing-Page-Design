import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo1 from "@/public/assets/logo1.svg";
import Call from "@/public/assets/call.svg";
import Msg from "@/public/assets/msg.svg";
import { footerLinks } from "@/constants/index";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 sm:container">
      <div className="mx-auto w-full max-w-screen-xl px-8 sm:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="flex flex-row items-center space-x-2 rtl:space-x-reverse mb-4"
            >
              <Image src={Logo1} alt=" Logo" height={38} width={38} />
              <span className="font-extrabold text-3xl font-clash-display">uifry</span>
            </Link>
            <div className="flex flex-row items-center gap-3 mb-4">
              <Image
                src={Call}
                height={24}
                width={24}
                loading="lazy"
                alt="call"
              />
              <Link
                href="mailto:Help@Frybix.com"
                className="font-medium text-base font-clash-display"
              >
                Help@Frybix.com
              </Link>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image
                src={Msg}
                height={24}
                width={24}
                loading="lazy"
                alt="call"
              />
              <Link href="tel:+123445667889" className="font-medium text-base font-clash-display">
                +1 234 456 678 89
              </Link>
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="mb-4 text-lg font-semibold text-black uppercase font-clash-display dark:text-white leading-10">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:underline font-medium text-base text-black dark:text-white leading-7 font-clash-display"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.hasForm && (
                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only font-clash-display">
                    Email
                  </label>
                  <div className="rounded-md border border-gray-100 p-2  sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full sm:text-sm bg-transparent p-3 sm:p-1 font-clash-display"
                    />
                    <Button className="mt-1 w-full  bg-black hover:bg-gray-800 px-6 py-3 text-sm font-medium tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0 dark:bg-[#FF5555] dark:hover:bg-[#be5555] rounded-md font-clash-display">
                      Subscribe
                    </Button>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between sm:gap-0 gap-2">
          <span className="text-sm text-center font-clash-display"> Copyright 2024 uifry.com all rights reserved</span>{" "}
          <span className="text-sm text-black sm:text-center dark:text-white text-center font-clash-display">
          Crafted with passion by {" "}
            <Link className="font-bold" target="_blank" href="https://tejasviraj.vercel.app/">Tejasvi Raj</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
