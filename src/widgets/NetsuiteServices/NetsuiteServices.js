
import SubtitleBadge from "@/components/SubtitleBadge";
import ArrowRightIcon from "@/utilities/Icons/ArrowRightIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NetsuiteServices = ({ data }) => {

  return (
    <section data-widget="NetsuiteServices" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">     
        <SubtitleBadge classNames="!text-[#545E22] bg-[#9BCA3B24]">{data?.subtitle}</SubtitleBadge>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] text-[#2A4448] font-medium !leading-[1.2] max-w-full lg:max-w-[40.625rem] mb-8 md:mb-12 lg:mb-[4.438rem]">
          {data?.sectionTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {data?.services?.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-[#00000026] py-6 md:py-8 lg:py-[2.813rem] px-4 md:px-6 lg:px-[1.813rem] group"
              >
                <div className="">
                  <figure className="relative mb-6 md:mb-8">
                    <Image src={item?.service_icon} width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
                  </figure>
                  <h6 className="text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-[1.3] text-[#2A4448] mb-3 md:mb-4 max-w-full lg:max-w-[12.5rem]">
                    {item?.title}
                  </h6>
                  {item?.description &&
                  <p className="text-sm md:text-base font-normal leading-[1.5] text-[#2A4448] tracking-tight mb-6 md:mb-[1.813rem]">
                    {item?.description}
                  </p>
                  }
                </div>
                <Link
                  href={item?.linkText}
                  className="text-[#2A4448] text-sm md:text-base font-semibold flex items-center gap-x-2"
                >
                  {item?.linkText}
                  <ArrowRightIcon className="ml-0 transition-all duration-200 ease-linear group-hover:ml-2"/>
                </Link>
              </div> 
            )
          })}
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-16 lg:mt-[4.4375rem] mx-auto">
          <Link
            href={data?.cta?.link}
            className="btn border border-[#2A4448] text-[#2A4448] rounded-lg hover:bg-primary hover:border-primary px-6 py-3 text-sm md:text-base"
          >
            {data?.cta?.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NetsuiteServices;