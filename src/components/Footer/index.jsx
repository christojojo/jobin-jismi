"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ data }) => {
  return (
    <footer className="bg-secondary text-white pt-16 md:pt-24 lg:pt-[120px]">
      <div className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 md:pb-16 lg:pb-[74px] border-b border-outline gap-8 lg:gap-0">
          <h6 className="max-w-full lg:max-w-[567px] text-[36px] md:text-[56px] font-medium leading-[1.2]">
            {data.heading}
          </h6>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-x-[32px] w-full sm:w-auto">
            {data.buttons?.map((item, index) => (
              <Button
                key={index}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        {/* Footer Columns */}
        <div className="flex items-start justify-between gap-8 pt-[60px] py-[63px] flex-wrap">
          {Object.entries(data.footer_items[0]).map(([section, items]) => (
            <div key={section}>
              <h6 className="text-lg lg:text-18 font-medium leading-[1.3] pb-6 lg:pb-[32px]">
                {section}
              </h6>
              <ul className="">
                {Array.isArray(items)
                  ? items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm lg:text-16 font-normal leading-[155%] tracking-[-0.02em] mb-4 lg:mb-[21px] text-[#FFFFFFB2] hover:text-primary transition-colors duration-300 ease-in-out"
                      >
                        <Link href={`/`}>{item}</Link>
                      </li>
                    ))
                  : Object.entries(items).map(([label, value]) => (
                      <li
                        key={label}
                        className="text-sm lg:text-16 font-normal leading-[155%] tracking-[-0.02em] mb-4 lg:mb-[21px] text-[#FFFFFFB2]"
                      >
                        <Link href={`/`}>
                          <span className="w-[147px] inline-block">
                            {label}
                          </span>
                          <span className="font-semibold hover:text-primary transition-colors duration-300 ease-in-out">: {value}</span>
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-outline py-8 lg:py-[2.563rem]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
            <ul className="flex items-center gap-x-4 lg:gap-x-[23px] order-2 lg:order-1">
              {data.social_media_links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.icon}
                        alt={`social-icon-${index}`}
                        width={24}
                        height={24}
                        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="text-primary100 text-md lg:text-16 font-normal leading-[22px] tracking-[-2%] text-center lg:text-left order-1 lg:order-2">
              Copyright © 2025 Jobin & Jismi | All rights reserved |
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              |
              <Link
                href="/terms-and-conditions"
                className="hover:text-primary transition-all duration-300 ease-in-out"
              >
                Terms and Condition
              </Link>
            </p>
            <a href="https://webandcrafts.com/" className="text-primary100 text-md lg:text-16 font-normal leading-[22px] tracking-[-2%] order-3 hover:text-primary transition-all duration-200 ease-linear">
              Designed by WAC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

