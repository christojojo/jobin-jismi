"use client";
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import "./homeBanner.module.css"

const SLIDE_INTERVAL = 5000; // 5 seconds

const HomeBanner = ({ data }) => {
  const autoplayOptions = useCallback(
    () => Autoplay({ delay: SLIDE_INTERVAL }),
    []
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayOptions(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // used to restart animation

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setAnimationKey((prev) => prev + 1); // trigger animation restart
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // initial
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (!Array.isArray(data?.items)) return null;

  const firstMedia = data.items[0]?.banner_media;

  return (
    <section className="relative w-full h-screen">
      {/* Background media */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {firstMedia?.media_type === "video" ? (
          <video
            className="w-full h-full object-cover"
            src={firstMedia.video_url}
            poster={firstMedia.poster}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={firstMedia?.poster || "/images/fallback.jpg"}
            alt={firstMedia?.alt || ""}
            className="object-cover"
            fill
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 embla overflow-hidden h-full"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          {data.items.map((item, index) => (
            <div className="embla__slide h-full" key={index}>
              <div className="relative w-full h-full flex items-end px-4 pb-[90px] text-white">
                <div className="container mx-auto relative">
                  <h2 className="text-[70px] font-medium leading-[80px] max-w-4xl mb-[48px]">
                    {item.title}
                  </h2>
                  {item.button && (
                    <Link href={item.button.link} className="btn btn-outline">
                      {item.button.text}
                    </Link>
                  )}
                  {item.brand_images && (
                    <ul className="flex mt-[150px] max-w-[830px]">
                      {item.brand_images.map((brand, idx) => (
                        <li
                          key={idx}
                          className="w-full pr-[55px] mr-[55px] border-r border-[#ffffff42] last:border-r-0 last:mr-0"
                        >
                          <figure className="relative pb-[28.1%] max-w-[133px]">
                            <Image src={null} alt={brand.alt} fill />
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
      {/* Progress Bar Navigation */}
      <div className="absolute bottom-[82px] right-[302px] z-20 flex gap-x-12 w-auto">
        {data.items.map((_, index) => (
          <div
            key={index}
            className="relative w-[40px] h-[4px] bg-[#D9D9D930] overflow-hidden "
          >
            {index === selectedIndex && (
              <div
                key={animationKey} 
                className="absolute top-0 left-0 h-full bg-white animate-fill"
                style={{ animationDuration: `${SLIDE_INTERVAL}ms` }}
              />
            )}
          </div>
        ))}
      </div>     
    </section>
  );
};

export default HomeBanner;
