import Image from "next/image";
import React from "react";
import Iphone from "@/public/assets/phone12.svg";
import BG2 from "@/public/assets/bg2.svg"
import { Button } from "./ui/button";

const Started = () => {
  return (
    <section className="g-white dark:bg-gray-900 py-14 sm:container">
      <div className="sm:px-10 px-5 sm:py-5 py-9 ">
      <div
        className=" "
        style={{
          width: "100%",
          height: "508px",
          backgroundImage: `url(${BG2.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         {/* <div className="bg-black py-4 rounded-lg">
          <div className="flex flex-row">
            <div>
              <h1 className="text-5xl text-white font-bold">Ready To Get Started ?</h1>
              <p>
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </p>
              <Button className="text-black border-0 bg-white hover:bg-gray-800 focus:ring-4 font-medium text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md mr-8">
                Download App
                <svg
                 className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 26 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5273 16.8217C21.4939 12.827 24.8032 10.8799 24.9573 10.7929C23.0815 8.06286 20.1742 7.68815 19.1492 7.66139C16.7041 7.40716 14.3393 9.12011 13.0933 9.12011C11.8271 9.12011 9.91117 7.68815 7.84121 7.72834C5.18165 7.76845 2.69631 9.30746 1.33641 11.6895C-1.4772 16.554 0.61963 23.7002 3.31934 27.6346C4.6658 29.5617 6.24014 31.7096 8.30346 31.6359C10.3198 31.5556 11.0768 30.3512 13.5086 30.3512C15.9203 30.3512 16.6303 31.6359 18.7339 31.5891C20.8977 31.5556 22.2643 29.6553 23.5639 27.7149C25.1248 25.5068 25.7478 23.3322 25.7746 23.2251C25.721 23.1916 21.5676 21.6059 21.5273 16.8217ZM17.5548 5.0719C18.6401 3.71361 19.3836 1.87354 19.176 0C17.6084 0.0668761 15.6389 1.08394 14.5134 2.40884C13.5153 3.57978 12.6176 5.49343 12.8521 7.29339C14.6072 7.4205 16.4227 6.40344 17.5548 5.0719Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </div>
            <Image
              src={Iphone}
              height={300}
              width={300}
              alt="iphone"
              loading="lazy"
            />
          </div>
        </div> */}
      </div>
      </div>
    </section>
  );
};

export default Started;
