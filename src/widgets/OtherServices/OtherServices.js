import SubtitleBadge from "@/components/SubtitleBadge";
import ArrowRightIcon from "@/utilities/Icons/ArrowRightIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherServices = ({ data }) => {
  return (
    <section data-widget="OtherServices" className="bg-white py-16 md:py-24 lg:py-[8rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 md:pb-16 lg:pb-[4.5rem] gap-6 lg:gap-0">
          <div className="w-full lg:w-auto">
            <SubtitleBadge
              children={data?.label}
              classNames="!text-[#545E22] bg-[#9BCA3B24]"
            />
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.2] tracking-tight text-[#2A4448] max-w-full lg:max-w-[39rem]">
              {data?.title}
            </h3>
          </div>
          <p className="text-lg sm:text-xl lg:text-[1.25rem] font-normal leading-[1.3] tracking-tight text-black max-w-full lg:max-w-[31rem]">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center lg:justify-start gap-4 sm:gap-6 lg:gap-x-[0.75rem]">
          {data?.services?.map((item, index) => (
            <div
              key={index}
              className="relative w-full lg:max-w-[19.75rem] rounded-md overflow-hidden group bg-[#cdcdcd]"
            >
              {/* Background Video */}
              {/* {item?.video && (
                <video
                  src={item.video}
                  poster="https://admin.jobinandjismi.com/uploads/jump_1_2x_e955317ed2.webp"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[405px] object-cover z-[-1] rounded-md"
                />
              )} */}
              {item?.image && (
                <figure className="absolute inset-0">
                  <Image src={item?.image} fill alt="bg-image" className="object-cover"/>
                </figure>
              )}

              {/* Content */}
              <div className="relative flex flex-col justify-between pt-8 sm:pt-10 lg:pt-[2.625rem] px-6 sm:px-8 lg:px-[2.25rem] pb-6 sm:pb-8 lg:pb-[2.063rem] min-h-[300px] sm:min-h-[350px] lg:min-h-[25.313rem] z-[1]">
                <h6 className="text-xl sm:text-2xl lg:text-[24px] font-semibold leading-tight lg:leading-[26.26px] text-white">{item?.title}</h6>
                <div>
                  <p className="text-sm sm:text-base font-normal tracking-tight mb-4 sm:mb-6 text-white">
                    {item?.description}
                  </p>
                  <Link
                    href={item?.link?.url}
                    className="text-sm sm:text-base lg:text-16 font-semibold leading-5 flex items-center text-white"
                  >
                    {item?.link?.label}
                    <ArrowRightIcon className="ml-2 transition-all duration-200 ease-linear group-hover:ml-0" fill={'#fff'}/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;