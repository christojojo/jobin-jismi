"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Button";

const Header = ({data}) => {  

  return (
    <header className="fixed top-0 left-0 z-50 bg-transparent w-full">
      <div className="container mx-auto px-16">
        <div className="flex justify-between items-center py-20">
          {/* Logo and Menu */}
          <div className="flex items-center">
            <h1 className="bg-white">{data?.title}</h1>
            <Link href="/">
              <figure className="relative w-[254px] h-[36px]">
                <Image
                  src={data?.image?.url || "/images/dummy/logo.png"}
                  alt={data?.image?.alternativeText || "logo"}
                  fill
                  className="object-contain"
                  priority
                />
              </figure>
            </Link>

            <ul className="flex items-center space-x-[36px] ml-[50px]">
              {data?.menu_items?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      target="_blank"
                      className="py-8 text-16 font-medium text-white leading-none tracking-normal transition-all duration-200 ease-in-out hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Search and Button */}
          <div className="flex items-center gap-x-[46px] w-fit">
            <Image
              src={data?.search_icon?.url}
              width={24}
              height={24}
              alt={data?.search_icon?.alternativeText}
            />
            <Link href={data?.button?.url || "/contact-us"}>
              <Button size="lg" variant="primary">
                {data?.button?.title || "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
