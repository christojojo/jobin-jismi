"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useHomeBanner } from "@/CustomHooks/useHomeBanner";

const HomeBanner = ({ data }) => {
  const { emblaRef, selectedIndex, animationKey, SLIDE_INTERVAL } =
    useHomeBanner();

  if (!Array.isArray(data?.items)) return null;

  return (
    <section className="relative w-full h-screen">
      <div ref={emblaRef} className="overflow-hidden h-full relative z-10">
        <div className="flex h-full">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] relative h-full"
            >
              {/* Background Media */}
              <div className="absolute inset-0 -z-10">               
                {item.banner_media?.media_type === "video" ? (
                  <video
                    key={index}
                    className="w-full h-full object-cover"
                    src={item?.banner_media?.url}
                    poster={item.banner_media.poster}
                    alt={item.banner_media?.alt}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />
                ) : (
                  <Image
                    src={item?.banner_media?.url}
                    alt={item?.banner_media?.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Slide Content */}
              <div className="w-full h-full flex items-end px-4 sm:px-6 lg:px-8 pb-24 text-white">
                <div className="container mx-auto">
                  <h2 className="text-3xl sm:text-5xl md:text-[4.375rem] font-semibold leading-tight md:leading-[80px] max-w-[52.813rem] mb-8 sm:mb-12">
                    {item?.title}
                  </h2>
                  {item?.button && (
                    <Link
                      href={item.button.link}
                      className="inline-block border border-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition"
                    >
                      {item.button.text}
                    </Link>
                  )}
                  {item?.brand_images?.length > 0 && (
                    <ul className="flex flex-wrap items-center gap-x-4 gap-y-6 mt-16 max-w-4xl">
                      {item.brand_images.map((brand, i) => (
                        <li
                          key={i}
                          className="flex-1 max-w-[120px] border-r border-white/25 pr-4 last:border-r-0 last:pr-0"
                        >
                          <figure className="relative aspect-[3.55/1] w-full">
                            <Image
                              src={brand?.src || "/images/placeholder.png"}
                              alt={brand?.alt || `Brand ${i + 1}`}
                              fill
                              className="object-contain"
                              loading="lazy"
                            />
                          </figure>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-[3.6rem] lg:bottom-20 right-4 sm:right-8 z-20 flex gap-x-3">
        {data.items.map((_, index) => (
          <div
            key={index}
            className="relative w-10 h-1 bg-[#D9D9D9]/[0.19] rounded-full overflow-hidden"
          >
            <div
              key={index === selectedIndex ? animationKey : undefined}
              className={`absolute top-0 left-0 h-full bg-white ${
                index === selectedIndex ? "animate-fill" : ""
              }`}
              style={{ animationDuration: `${SLIDE_INTERVAL}ms` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
