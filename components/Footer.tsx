import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import Call from "@/public/assets/call.svg";
import Msg from "@/public/assets/msg.svg";
import { footerLinks } from "@/constants/index";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={Logo}
                alt="Flowbite Logo"
                height={38}
                width={120}
                loading="lazy"
              />
            </Link>
            <div className="flex flex-row items-center gap-3 mb-4">
              <Image
                src={Call}
                height={24}
                width={24}
                loading="lazy"
                alt="call"
              />
              <span className="font-medium text-base">Help@Frybix.com</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image
                src={Msg}
                height={24}
                width={24}
                loading="lazy"
                alt="call"
              />
              <span className="font-medium text-base">+1 234 456 678 89</span>
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:underline font-medium text-base text-black dark:text-white"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.hasForm && (
                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>
                  <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border-none sm:text-sm bg-transparent p-3 sm:p-0"
                    />
                    <button className="mt-1 w-full  bg-black hover:bg-gray-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0 dark:bg-[#FF5555] dark:hover:bg-[#be5555]">
                      Sign Up
                    </button>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
            Copyright 2022 uifry.com all rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
