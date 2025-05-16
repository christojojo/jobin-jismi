

import Image from "next/image";
import React from "react";

const HomeBanner = ({ data }) => {
  console.log(data.item.banner_media.alt, "hoembanner");

  return (
    <div
      className="relative h-dvh w-full overflow-hidden"
      data-widget="HomeBanner"
    >
      {/* Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={"/images/home-page/banner-video.mp4"}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <Image
        src={"/images/homebanner/banner_poster.webp"}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center pb-12">
        <h1 className="text-white text-[70px] font-medium leading-[80px] max-w-4xl mb-[48px]">
          {data.title}
        </h1>

      </div>
    </div>
  );
};

export default HomeBanner;
