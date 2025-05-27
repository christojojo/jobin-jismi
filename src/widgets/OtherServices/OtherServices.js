import SubtitleBadge from "@/components/SubtitleBadge";
import ArrowRightIcon from "@/utilities/Icons/ArrowRightIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherServices = ({ data }) => {
  return (
    <section data-widget="OtherServices" className="bg-white py-[8rem]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center pb-[4.5rem]">
          <div>
            <SubtitleBadge
              children={data?.label}
              classNames="!text-[#545E22] bg-[#9BCA3B24]"
            />
            <h3 className="text-[3.5rem] font-medium leading-[1.2] tracking-tight text-[#2A4448] max-w-[39rem]">
              {data?.title}
            </h3>
          </div>
          <p className="text-[1.25rem] font-normal leading-[1.3] tracking-tight text-black max-w-[31rem]">
            {data.description}
          </p>
        </div>

        <div className="flex items-center justify-start gap-x-[0.75rem]">
          {data?.services?.map((item, index) => (
            <div
              key={index}
              className="relative max-w-[19.75rem] rounded-md overflow-hidden group bg-[#cdcdcd]"
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
                  className="absolute inset-0 w-full h-full min-h-[405px] object-cover z-[-1] rounded-md"
                />
              )} */}
              {item?.image && (
                <figure>
                  <Image src={item?.image} fill alt="bg-image"/>
                </figure>
              )}

              {/* Content */}
              <div className="relative flex flex-col justify-between pt-[2.625rem] px-[2.25rem] pb-[2.063rem] min-h-[25.313rem] z-[1]">
                <h6 className="text-[24px] font-semibold leading-[26.26px]">{item?.title}</h6>
                <div>
                  <p className="text-base font-normal tracking-tight mb-6 text-white">
                    {item?.description}
                  </p>
                  <Link
                    href={item?.link?.url}
                    className="text-16 font-semibold leading-5 flex items-center text-white"
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
