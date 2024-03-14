"use client";

import React, { FC, useState } from "react";
import imageRightPng from "@/images/s3.png";
import imageRightPng2 from "@/images/s2.png";
import imageRightPng3 from "@/images/s1.png";
import backgroundLineSvg from "@/images/Moon.svg";

import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";
import Image, { StaticImageData } from "next/image";
import Next from "./next";
import Prev from "./prev";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: string;
}
export interface SectionHero2Props {
  className?: string;
}

const DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Upload Product From Your Side",
    subHeading: "upload Yours",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Met with Seller without Third party",
    subHeading: "upload Yours",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Product that never found else anywhere",
    subHeading: "upload Yours",
    btnText: "Explore now",
    btnLink: "/",
  },
];
let TIME_OUT: NodeJS.Timeout | null = null;

const SectionHero2: FC<SectionHero2Props> = ({ className = "" }) => {
  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? 5500 : null
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };
  // =================

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = DATA[index];
    if (!isActive) {
      return null;
    }
    return (
      <div
        className={`nc-SectionHero2Item nc-SectionHero2Item--animation flex flex-col-reverse lg:flex-col relative overflow-hidden ${className}`}
        key={index}
      >
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          {DATA.map((_, index) => {
            const isActive = indexActive === index;
            return (
              <div
                key={index}
                onClick={() => {
                  setIndexActive(index);
                  handleAfterClick();
                }}
                className={`relative px-1 py-1.5 cursor-pointer`}
              >
                <div
                  className={`relative w-20 h-1 shadow-sm rounded-md bg-white`}
                >
                  {isActive && (
                    <div
                      className={`nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md ${
                        isActive ? " " : " "
                      }`}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Prev
          className="absolute left-1 sm:left-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
          btnClassName="bg-white h-12 hover:border-slate-400 dark:hover:border-slate-400"
          svgSize="w-6 h-6"
          onClickPrev={handleClickPrev}
        />
        <Next
          className="absolute right-1 sm:right-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
          btnClassName="bg-white h-12 hover:border-slate-400 dark:hover:border-slate-400"
          svgSize="w-6 h-6"
          onClickNext={handleClickNext}
        />

        {/* BG */}
        <div className="absolute inset-0 bg-[#dadb80]">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute w-full h-full object-contain"
            src={backgroundLineSvg}
            alt="hero"
          />
        </div>

        <div className="relative container pb-0 pt-14 sm:pt-20 lg:py-44">
          <div
            className={`relative z-[1] w-full ml-[10%] max-w-3xl space-y-8 sm:space-y-14 nc-SectionHero2Item__left`}
          >
            <div className="space-y-5 sm:space-y-6">
              <span className="nc-SectionHero2Item__subheading block text-base md:text-xl text-slate-700 font-medium">
                {item.subHeading}
              </span>
              <h2 className="nc-SectionHero2Item__heading font-semibold text-3xl  sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
                {item.heading}
              </h2>
            </div>

          
          </div>
          <div className="mt-10 lg:mt-0 lg:absolute right-0 bottom-0 top-0 w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-contain object-right-bottom nc-SectionHero2Item__image"
              src={item.image}
              alt={item.heading}
              priority
            />
          </div>
        </div>
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default SectionHero2;
