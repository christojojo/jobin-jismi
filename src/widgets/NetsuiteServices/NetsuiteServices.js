import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NetsuiteServices = ({ data }) => {
  console.log(data.cta.link, "wedwedd");

  return (
    <section data-widget="NetsuiteServices" className="bg-white py-[128px]">
      <div className="container mx-auto px-16">
        <span className="block w-fit text-14 text-[#545E22] py-5 px-12 rounded-[90px] bg-[#9BCA3B24] mb-16">
          {data?.subtitle}
        </span>
        <h3 className="text-[56px] text-[#2A4448] font-medium leading-[1.2] max-w-[650px] mb-[71px]">
          {data.sectionTitle}
        </h3>
        <div className="grid grid-cols-3 gap-[40px] ">
          {data?.services.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-[#00000026] py-[45] px-[29]"
              >
                <div className="">
                  <figure className="relative mb-[32px]">
                    <Image src={item.service_icon} width={80} height={80} />
                  </figure>
                  <h6 className="text-[28px] font-medium leading-[1.3] text-[#2A4448] mb-16 max-w-[200px]">
                    {item.title}
                  </h6>
                  <p className="text-16 font-normal leading-[1.5] text-[#2A4448] tracking-tight mb-[29px]">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.linkText}
                  className="text-[#2A4448] text-16 font-semibold"
                >
                  {item.linkText}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-[71px] mx-auto">
          <Link
            href={data.cta.link}
            className="btn border border-[#2A4448] text-[#2A4448] rounded-lg hover:bg-primary hover:border-primary"
          >
            {data.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NetsuiteServices;
