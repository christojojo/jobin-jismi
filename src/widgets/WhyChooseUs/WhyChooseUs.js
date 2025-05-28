import SubtitleBadge from "@/components/SubtitleBadge";
import Image from "next/image";
import React from "react";

const WhyChooseUs = ({ data }) => {
  return (
    <section data-widget="WhyChooseUs" className="py-16 md:py-24 lg:py-[128px] bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-4">
          <div className="w-full lg:w-auto">
            <SubtitleBadge
              children={data?.subtitle}
              classNames="text-white bg-[#FFFFFF24] mb-4"
            />
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.2] max-w-full lg:max-w-[26.75rem]">
              {data?.title}
            </h4>
          </div>
          <div className="w-full lg:max-w-[39.938rem]">
            {data?.features.map((item, index) => {
              return (
                <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-[4.188rem] items-start sm:items-center py-8 sm:py-12 lg:py-[3.5rem] first:pt-0 last:border-none border-b border-[#FFFFFF2E]">                  
                  <div className="flex-shrink-0">
                    <Image src={item?.icon} alt="icon" width={70} height={70} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]"/>
                  </div>
                  <div className="flex flex-col max-w-full lg:max-w-[27.813rem]">
                    <div className="text-xl sm:text-2xl lg:text-[1.5rem] font-medium leading-tight lg:leading-[28px] mb-2 sm:mb-3 lg:mb-[0.813rem]">{item?.title}</div>
                    <p className="text-base sm:text-lg font-normal text-[#FFFFFFB8]">{item?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-4 sm:left-8 lg:left-[3.25rem] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-full lg:max-w-[44.375rem] h-48 sm:h-64 md:h-80 lg:h-[34.563rem] z-[2] hidden xl:block">
        <figure className="relative pb-[78%] pointer-events-none select-none">
          <Image src={data?.bg_img} fill alt="img" />
        </figure>
      </div>
    </section>
  );
};

export default WhyChooseUs;