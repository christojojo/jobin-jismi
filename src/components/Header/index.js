"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { useEffect, useState } from "react";

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
console.log(data?.dark_image?.url);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-linear ${
        isScrolled ? "bg-white  shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-[1rem]">
        <div className="flex justify-between items-center py-[1.25rem]">
          {/* Logo and Menu */}
          <div className="flex items-center">
            <Link href="/">
              <figure className="relative w-[15.875rem] h-[2.25rem]">
                <Image
                  src={`${isScrolled ? data?.dark_image?.url : data?.image?.url}`}
                  alt={data?.image?.alternativeText || "logo"}
                  fill
                  className="object-contain"
                  priority
                  loading="eager"
                />
              </figure>
            </Link>

            <ul className="flex items-center space-x-9 ml-[3.125rem]">
              {data?.menu_items?.map((item, index) => {
                return (
                  item?.url && (
                    <li key={index}>
                      <Link
                        href={item?.url}
                        target="_blank"
                        className={`py-2 text-base font-medium leading-none tracking-normal transition-all duration-200 ease-in-out hover:text-primary ${
                          isScrolled ? "text-black" : "  text-white"
                        }`}
                      >
                        {item?.title}
                      </Link>
                    </li>
                  )
                );
              })}
            </ul>
          </div>

          {/* Search and Button */}
          <div className="inline-flex items-center gap-x-[2.875rem]">
            <button>
              <Image
                src={data?.search_icon?.url}
                width={24}
                height={24}
                alt={data?.search_icon?.alternativeText}
              />
            </button>
            {data?.button?.url && (
              <Button href={data?.button?.url} size="lg" variant="primary">
                {data?.button?.title}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
