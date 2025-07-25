import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const StayInTouch = ({ data }) => {
  return (
    <section data-widget="StayInTouch" className="relative py-[6.8755rem]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data?.background.desktop}
          fill
          alt={data?.background?.alt}
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-[29.188rem]">
          <h4 className="text-[56px] font-medium text-secondary leading-[1.2] mb-6">
            {data?.title}
          </h4>
          <p className="text-xl text-secondary leading-[1.5] mb-8">
            {data?.description}
          </p>
          <Button variant="primary">{data?.button?.label}</Button>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
