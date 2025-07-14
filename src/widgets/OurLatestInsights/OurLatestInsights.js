import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const OurLatestInsights = ({ data }) => {
  
  return (
    <section data-widget="OurLatestInsights" className="py-[8rem] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col max-w-[26.563rem]">
            <h4 className="text-[3.5rem] font-medium leading-[1.2] text-secondary mb-[3.5rem]">
              {data.title}
            </h4>
            <div>
            <Button variant="primary">{data?.button?.label}</Button>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLatestInsights;
