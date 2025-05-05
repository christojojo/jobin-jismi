import Link from "next/link";
import React from "react";

const LinkItem = ({ title, url, haveSub, toggleMenu,  ...rest }) => {
  //checking have submenu
  if (haveSub) {
    return <button {...rest} className="flex w-full font-medium text-[16px] leading-[1.3] py-[20px] border-b border-b-[#E7EBEE] group-last:border-b-0 button_icon">{title}</button>;
  } else {
    return <Link {...rest} onClick={toggleMenu} className="flex w-full font-medium text-[16px] leading-[1.3] py-[20px] border-b border-b-[#E7EBEE] group-last:border-b-0" href={`${url}`}>{title}</Link>;
  }
};

export default LinkItem;
