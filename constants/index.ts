import Cube from "@/public/assets/cube-02.svg";
import Cubical from "@/public/assets/cube-04.svg";
import Star from "@/public/assets/star-05.svg";

// navbar
export const navItems = [
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

// fotter 
export const footerLinks = [
  {
    title: "Links",
    links: [
      { href: "/", text: "Home" },
      { href: "/", text: "About Us" },
      { href: "/", text: "Bookings" },
      { href: "/", text: "Blogs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/", text: "Term of Use" },
      { href: "/", text: "Privacy Policy" },
      { href: "/", text: "Cookie Policy" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/", text: "Take Tour" },
      { href: "/", text: "Live Chat" },
      { href: "/", text: "Reviews" },
    ],
  },
  {
    title: "Newsletter",
    links: [
      { href: "/", text: "Stay Up To Date" },
    ],
    hasForm: true,
  },
];

// features
export  const features = [
  {
    src: Star,
    alt: "star",
    title: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    src: Cube,
    alt: "cube",
    title: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    src: Cubical,
    alt: "cubical",
    title: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
];