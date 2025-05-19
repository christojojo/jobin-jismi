import React from "react";

const Button = ({
  children,
  variant = "default",
  classNames,
  icon,
  size = "lg",
}) => {

  const variants = {
    primary: "bg-primary border-primary rounded-[8px] text-black hover:bg-secondaryHover hover:text-white hover:border-white",
    outline: "border border-[#FFFFFF80] rounded-[8px] text-white hover:bg-primary hover:text-black",
  };

  const sizes = {
    sm: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md",
    md: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md",
    lg: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md leading-5",
  };

  const baseClass =
  "border text-base leading-5 transition-all duration-300 ease-in-out inline-flex justify-center items-center text-center gap-1 whitespace-nowrap";


const btnClass = `${variants[variant]} ${sizes[size]} ${baseClass}`

  return (
    <button className={`${classNames} ${size} ${btnClass}`}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
