import React from "react";

const SubtitleBadge = ({classNames="",children,...rest}) => {
  return (
    <span className={`inline-block text-[#fff] text-sm font-normal leading-tight px-3 py-[0.313rem] bg-[#292929] rounded-[90px] mb-6 ${classNames}`}  {...rest}>
      {children}
    </span>
  );
};

export default SubtitleBadge;
