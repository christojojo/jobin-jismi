import Link from "next/link";
import React from "react";

const Button = ({
  children,
  variant = "default",
  classNames,
  size = "lg",
  ...rest
}) => {
  const variants = {
    primary:
      "bg-primary border-primary rounded-[8px] text-black hover:bg-secondaryHover hover:text-white hover:border-secondaryHover",
    outline:
      "border border-[#FFFFFF80] bg-transparent rounded-lg text-white hover:bg-primary hover:text-black hover:border-primary",
  };

  const sizes = {
    // sm: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md",
    // md: "px-5 xxl:px-[28px] py-3 xxl:py-14 font-semibold rounded-md",
    lg: "py-3.5 px-[1.524rem]  font-semibold rounded-md leading-5",
  };

  const baseClass =
    "border text-base leading-5 transition-all duration-300 ease-in-out inline-flex justify-center items-center text-center gap-1 whitespace-nowrap";

  const btnClass = `${variants[variant]} ${sizes[size]} ${baseClass}`;

  const Tag = rest?.href ? Link : "button";

  return (
    <Tag className={`${classNames} ${size} ${btnClass}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Button;
