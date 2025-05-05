import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const menuItems = [
    { label: "NetSuite", href: "/" },
    { label: "Services", href: "/about" },
    { label: "Products", href: "/contact" },
    { label: "Our Works", href: "/contact" },
    { label: "Industries", href: "/contact" },
    { label: "Company", href: "/contact" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full py-5">
          <div className="flex items-center w-full">
            <Link href={"/"}>
              <figure className="relative w-[254px]">
                <Image
                  src={"/images/logo.png"}
                  width={254}
                  height={36}
                  alt="logo"
                />
              </figure>
            </Link>
            <ul className="flex space-x-[36px] ml-[50px]">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-10">
            <p>search</p>
            <button className="w-auto whitespace-nowrap">contact us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
