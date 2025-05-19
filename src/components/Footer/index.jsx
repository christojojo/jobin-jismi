"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ data }) => {
  return (
    <footer className="bg-secondary text-white pt-[120px] mt-[500px]">
      <div className="max-w-[1296px] mx-auto px-16">
        {/* Top Section */}
        <div className="flex justify-between items-center pb-[74px] border-b border-outline">
          <h6 className="max-w-[567px] text-[36px] md:text-[56px] font-medium leading-[1.2]">
            {data.heading}
          </h6>
          <div className="flex gap-x-[32px]">
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
              <h6 className="text-18 font-medium leading-[1.3] pb-[32px]">
                {section}
              </h6>
              <ul className="">
                {Array.isArray(items)
                  ? items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-16 font-normal leading-[155%] tracking-[-0.02em] mb-[21px] text-[#FFFFFFB2] hover:text-primary transition-colors duration-300 ease-in-out"
                      >
                        <Link href={`/`}>{item}</Link>
                      </li>
                    ))
                  : Object.entries(items).map(([label, value]) => (
                      <li
                        key={label}
                        className="text-16 font-normal leading-[155%] tracking-[-0.02em] mb-[21px] text-[#FFFFFFB2] hover:text-primary transition-colors duration-300 ease-in-out"
                      >
                        <Link href={`/`}>
                          <span className="w-[147px] inline-block">
                            {label}
                          </span>
                          <span className="font-semibold">: {value}</span>
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-outline py-40">
          <div className="flex justify-between items-center">
            <ul className="flex items-center gap-x-[23px]">
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
            <p className="text-primary100 text-16 font-normal leading-[22px] tracking-[-2%]">
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
            <div className="text-primary100 text-16 font-normal leading-[22px] tracking-[-2%]">
              Designed by WAC
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
