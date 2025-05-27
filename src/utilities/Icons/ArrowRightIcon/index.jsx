import React from "react";

const ArrowRightIcon = ({className, fill="#2A4448"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
      className={className}
    >
      <mask
        id="mask0_13879_17407"
        width="19"
        height="19"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M.008.058h18v18h-18z"></path>
      </mask>
      <g mask="url(#mask0_13879_17407)">
        <path
          fill={fill}
          d="M5.416 16.258 4.14 14.983l5.925-5.925L4.14 3.133l1.275-1.275 7.2 7.2z"
        ></path>
      </g>
    </svg>
  );
};

export default ArrowRightIcon;
