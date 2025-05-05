// import Link from "next/link";

// const Button = ({
//     className = "",
//     variant = "outline",
//     size = "md",
//     title,
//     icon,
//     handleClick,
//     children,
//     ...rest
//   }) => {

//     const Tag = rest?.href ? Link : "button";

//     const variants = {
//       outline: "border-white text-white hover:bg-white hover:text-black",
//       light: "border-white text-black bg-white hover:bg-primary hover:border-primary hover:text-white",
//       primary: "bg-primary border-primary text-white hover:scale-105 ",
//       "outline-dark": "border-black text-black hover:bg-black hover:text-white",
//       link: "p-0! border-none text-black underline underline-offset-4 hover:text-primary !h-auto",
//       dark: "border-black text-white bg-black hover:bg-primary hover:border-primary hover:text-white"
//     };

//     const sizes = {
//         sm: "px-5 xxl:px-6 py-3 xxl:py-3 font-regular rounded-md",
//         md: "px-5 xxl:px-8 py-3 xxl:py-3.5 font-medium rounded-2xl h-[51px]",
//         lg: "px-5 xxl:px-8 py-3 xxl:py-5 font-medium rounded-md",
//     }
//     const baseClass =
//       "border text-base leading-[1.17] transition-all duration-300 ease-in-out inline-flex justify-center items-center text-center gap-1";

//     const btnClass = `${variants[variant]} ${sizes[size]} ${baseClass}`;

//     return (
//       <Tag
//         className={`${btnClass} ${className}`}
//         {...rest}
//       >
//         {/* {icon && <Icons icon={icon} size={size} />} */}
//         {children}
//         {title}
//       </Tag>
//     );
//   };

// export default Button

import React from "react";

const Button = ({
  children,
  variant = "default",
  classNames,
  icon,
  size = "lg",
}) => {

  const variants = {
    primary: "bg-primary border-primary text-black hover:primary-hover",
    outline: "border-white text-white hover:bg-white hover:text-black",
    light:
      "border-white text-black bg-white hover:bg-primary hover:border-primary hover:text-white",
    "outline-dark": "border-black text-black hover:bg-black hover:text-white",
    link: "p-0! border-none text-black underline underline-offset-4 hover:text-primary !h-auto",
    dark: "border-black text-white bg-black hover:bg-primary hover:border-primary hover:text-white",
  };

  const sizes = {
    sm: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md",
    md: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md",
    lg: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md leading-5",
  };

  const baseClass =
  "border text-base leading-[1.17] transition-all duration-300 ease-in-out inline-flex justify-center items-center text-center gap-1 whitespace-nowrap";


const btnClass = `${variants[variant]} ${sizes[size]} ${baseClass}`

  return (
    <button className={`${classNames} ${size} ${btnClass}`}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
