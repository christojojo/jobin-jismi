import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const HomeAbout = ({ data }) => {
  return (
    <section data-widget="HomeAbout" className="relative pt-[200px] pb-[128px] bg-black"> 
      <div className="container mx-auto px-16 relative z-10">
        <div className="mb-[138px]">
        <span className="block text-white text-14 font-normal leading-1 px-12 py-5 bg-[#292929] rounded-[90px] mb-24">
          {data.subtitle}
        </span>
        <h2 className="text-[56px] font-medium leading-[1.2] tracking-tight mb-24 text-white max-w-[600px]">
          {data.title}
        </h2>
        <p className="max-w-[556px] text-18 leading-[1.5] tracking-tight mb-[32px]">
          {data.description}
        </p>
        <Button variant="primary">{data.button?.label}</Button>
        </div>
        <ul className="flex items-center justify-between max-w-[1244px] w-full">
          {data.stats.map((item,index) => {
          return(
            <li className="flex flex-col gap-4 w-fit">
              <span className="block text-[75px] font-light leading-[1]">{item.value}</span>
              <span className="block text-20 font-medium leading-[1.3] text-[#ffffff] opacity-[.7] max-w-[100px]">{item.label}</span>
            </li>
          )
          })}
        </ul>
      </div>

      <Image src={data.image} className="absolute top-0 right-0 w-auto pointer-none" width={1200} height={1200} />     
    </section>
  );
};

export default HomeAbout;
