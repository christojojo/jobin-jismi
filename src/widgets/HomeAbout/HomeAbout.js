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

// import Button from "@/components/Button";
// import SubtitleBadge from "@/components/SubtitleBadge";
// import React from "react";

// const HomeAbout = ({ data }) => {
//   return (
//     <section
//       data-widget="HomeAbout"
//       className="relative pt-16 md:pt-24 lg:pt-[12.5rem] pb-16 md:pb-24 lg:pb-32 bg-black"
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="mb-12 md:mb-16 lg:mb-[8.625rem]">          
//           <SubtitleBadge>{data?.subtitle}</SubtitleBadge>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.2] tracking-tight mb-4 md:mb-6 text-white max-w-full lg:max-w-[37.5rem]">
//             {data?.title}
//           </h2>
//           <p className="max-w-full lg:max-w-[34.75rem] text-base md:text-lg lg:text-18 leading-[1.5] tracking-tight mb-6 md:mb-8 text-white">
//             {data?.description}
//           </p>
//           {data?.button?.label && (
//             <Button variant="primary">{data?.button?.label}</Button>
//           )}
//         </div>
//         <ul className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:justify-between max-w-full lg:max-w-[77.75rem] w-full gap-8 sm:gap-6 lg:gap-0">
//           {data?.stats?.map((item, index) => {
//             return (
//               <li key={index} className="flex flex-col gap-1 text-center lg:text-left">
//                 <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.688rem] font-light leading-[1] text-white">
//                   {item?.value}
//                 </span>
//                 <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#ffffff] opacity-[.7] max-w-full lg:max-w-[6.25rem]">
//                   {item?.label}
//                 </span>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div
//         className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[62.5rem] lg:h-[62.5rem] pointer-events-none bg-no-repeat bg-contain bg-top opacity-30 sm:opacity-50 lg:opacity-100"
//         style={{ backgroundImage: `url(${data.image})` }}
//       />

//       {/* <Image
//         src={data.image}
//         className="absolute top-0 right-0 w-auto pointer-none"
//         width={1200}
//         height={1200}
//       /> */}
//     </section>
//   );
// };

// export default HomeAbout;