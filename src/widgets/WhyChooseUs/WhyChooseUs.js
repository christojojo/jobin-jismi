import SubtitleBadge from "@/components/SubtitleBadge";
import Image from "next/image";
import React from "react";

const WhyChooseUs = ({ data }) => {
  return (
    <section data-widget="WhyChooseUs" className="py-[128px] bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between w-full gap-4">
          <div>
            <SubtitleBadge
              children={data?.subtitle}
              classNames="text-white bg-[#FFFFFF24] mb-4"
            />
            <h4 className="text-[3.5rem] font-medium leading-[1.2] max-w-[26.75rem]">
              {data?.title}
            </h4>
          </div>
          <div className="w-full max-w-[39.938rem]">
            {data?.features.map((item, index) => {
              return (
                <div key={index} className="flex gap-[4.188rem] items-center py-[3.5rem] first:pt-0 last:border-none border-b border-[#FFFFFF2E]">                  
                  <Image src={item?.icon} alt="icon" width={70} height={70}/>
                  <div className="flex flex-col max-w-[27.813rem]">
                    <div className="text-[1.5rem] font-medium leading-[28px] mb-[0.813rem]">{item?.title}</div>
                    <p className="text-lg font-normal text-[#FFFFFFB8]">{item?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[3.25rem] w-full max-w-[44.375rem] h-[34.563rem] z-[2]">
        <figure className="relative pb-[78%] pointer-events-none select-none">
        <Image src={data?.bg_img} fill alt="img" />
        </figure>
      </div>
    </section>
  );
};

export default WhyChooseUs;
