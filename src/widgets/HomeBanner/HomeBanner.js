// "use client";
// import Button from "@/components/Button";
// import Image from "next/image";
// import React from "react";

// import useEmblaCarousel from 'embla-carousel-react'
// import { useEffect } from 'react'
// import Link from "next/link";

// const HomeBanner = ({ data }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
//     useEffect(() => {
//     if (emblaApi) {
//       // console.log(emblaApi.slideNodes())
//     }
//   }, [emblaApi])
//   console.log(data);

//   return (
//     <section>
//       <div className="embla" ref={emblaRef}>
//         <div className="embla__container">
//           {data.map((slide, index) => (
//             <div className="embla__slide" key={index}>
//               <img src={slide} alt={`Slide ${index}`} />
//                <div className="relative w-full h-screen overflow-hidden">

//               <Image
//                 src={"/images/homebanner/banner_poster.webp"}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-cover"
//                 fill
//               />
//               <div className="relative z-10 flex flex-col items-center justify-center h-full text-start text-white bg-black/50 px-4">
//                 <div className="container">
//                   <h2 className="text-white  text-[70px] font-medium leading-[80px] max-w-4xl mb-[48px]">
//                     {item.title}
//                   </h2>
//                   {item.button && (
//                     <Link href={item.button.link} className="btn btn-outline">
//                       {item.button.text}
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeBanner;

"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
// import  './homeBanner.module.scss';

const HomeBanner = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  if (!Array.isArray(data?.items)) return null; // defensive check

  return (
    <section className="">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {data.items.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative w-full h-screen overflow-hidden">
                {item.banner_media.media_type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.banner_media.video_url}
                    poster={item.banner_media.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.banner_media.poster}
                    alt={item.banner_media.alt || ""}
                    className="absolute inset-0 h-full w-full object-cover"
                    fill
                    priority
                  />
                )}

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-start text-white bg-black/50 px-4">
                  <div className="container">
                    <h2 className="text-white text-[70px] font-medium leading-[80px] max-w-4xl mb-[48px]">
                      {item.title}
                    </h2>
                    {item.button && (
                      <Link href={item.button.link} className="btn btn-outline">
                        {item.button.text}
                      </Link>
                    )}

                    {item.brand_images && (
                      <ul className="flex mt-[150px] divide-x-1">
                        {item.brand_images.map((brand, index) => (
                          <li key={index} className="w-full">
                            <figure className="relative pb-[8%] max-w-[133px]">
                              <Image src={brand.src} alt={brand.alt} fill />
                            </figure>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
