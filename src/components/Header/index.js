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

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-linear ${
        isScrolled ? "bg-white  shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-[1rem]">
        <div className="flex justify-between items-center py-[1.375rem] lg:py-[1.25rem] px-[0.25rem] lg:px-0">
          {/* Logo and Menu */}
          <div className="flex items-center justify-between lg:justify-start w-full lg:w-auto">
            <Link href="/">
              <figure className="relative w-[10.5rem] lg:w-[15.875rem] h-[1.5rem] lg:h-[2.25rem]">
                <Image
                  src={`${
                    isScrolled ? data?.dark_image?.url : data?.image?.url
                  }`}
                  alt={data?.image?.alternativeText || "logo"}
                  fill
                  className="object-contain"
                  priority
                  loading="eager"
                />
              </figure>
            </Link>

            <ul className="hidden lg:flex items-center space-x-9 ml-[3.125rem]">
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

            <div>
              {isScrolled ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 6h18M3 12h18M3 18h18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 6h18M3 12h18M3 18h18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </>
              )}
            </div>
          </div>

          {/* Search and Button */}
          <div className="lg:inline-flex items-center gap-x-[2.875rem] hidden">
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
