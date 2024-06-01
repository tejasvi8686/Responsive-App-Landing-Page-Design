"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo1 from "@/public/assets/logo1.svg";
import Star from "@/public/assets/start.svg";
import { Button } from "./ui/button";
// import {navItems} from "@/constants/index"

const navItems = [
  {
    href: "/",
    text: "Home",
    className:
      "block py-2 px-3 text-base text-white bg-[#FF5555] rounded md:bg-transparent md:text-[#FF5555] md:p-0 md:dark:text-red-500 font-bold",
    ariaCurrent: "page",
  },
  {
    href: "/",
    text: "About Us",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold",
  },
  {
    href: "/",
    text: "Services",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold",
  },
  {
    href: "/",
    text: "Contact",
    className:
      "block py-2 px-3 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF5555] md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 sm:px-8 px-0 sm:container ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
          >
            <Image src={Logo1} alt=" Logo" height={38} width={38} />
            <span className="font-extrabold text-3xl">uifry</span>
          </Link>
          <Image
            src={Star}
            alt="Start"
            height={50}
            width={50}
            className="absolute right-5 top-16 hidden md:block "
          />

          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={item.className}
                  aria-current={
                    item.ariaCurrent === undefined ? undefined : "page"
                  }
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          <ThemeSwitcher />
          <Button
            type="button"
            className="text-white border-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md"
          >
            Download
          </Button>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={item.className}
                aria-current={
                  item.ariaCurrent === undefined ? undefined : "page"
                }
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li className="flex flex-col space-y-2 mt-2">
            <ThemeSwitcher />
            <Button
              type="button"
              className="text-white border-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md"
            >
              Download
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
