import Button from "@/components/Button";
import SubtitleBadge from "@/components/SubtitleBadge";
import React from "react";

const HomeAbout = ({ data }) => {
  return (
    <section
      data-widget="HomeAbout"
      className="relative pt-[12.5rem] pb-32 bg-black"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-[8.625rem]">          
          <SubtitleBadge>{data?.subtitle}</SubtitleBadge>
          <h2 className="text-[3.5rem] font-medium leading-[1.2] tracking-tight mb-6 text-white max-w-[37.5rem]">
            {data?.title}
          </h2>
          <p className="max-w-[34.75rem] text-18 leading-[1.5] tracking-tight mb-8">
            {data?.description}
          </p>
          {data?.button?.label && (
            <Button variant="primary">{data?.button?.label}</Button>
          )}
        </div>
        <ul className="flex items-center justify-between max-w-[77.75rem] w-full">
          {data?.stats?.map((item, index) => {
            return (
              <li key={index} className="inline-flex flex-col gap-1">
                <span className="block text-[4.688rem] font-light leading-[1]">
                  {item?.value}
                </span>
                <span className="block text-xl font-medium  text-[#ffffff] opacity-[.7] max-w-[6.25rem]">
                  {item?.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="absolute top-0 right-0 w-[62.5rem] h-[62.5rem] pointer-events-none bg-no-repeat bg-contain bg-top"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      {/* <Image
        src={data.image}
        className="absolute top-0 right-0 w-auto pointer-none"
        width={1200}
        height={1200}
      /> */}
    </section>
  );
};

export default HomeAbout;
