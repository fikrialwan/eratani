"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MenuIcon } from "../icons/menu";

const listMenu = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/tentang-kami",
  },
  {
    name: "Tips & Berita Pertanian",
    link: "#",
  },
  {
    name: "Kegiatan",
    link: "#",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-foreground hover:bg-transparent lg:hover:bg-white container-parent fixed top-0 z-10">
      <div className="container flex flex-row items-center justify-between py-4 text-xl">
        <Link href="/" className="relative w-16 h-5 lg:h-11 lg:w-40">
          <Image
            src="/logo.webp"
            alt="logo"
            fill
            className="object-contain object-left"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex flex-row items-center gap-8">
            {listMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`${
                    item.link === pathname ? "font-bold" : ""
                  } hover:font-bold`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="#"
          className="py-[10px] px-[18px] bg-yellow hidden lg:block rounded-[5px]"
        >
          Mitra Petani
        </Link>
        <div className="relative block lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </button>
          <div
            className={`fixed top-0 right-0 w-screen h-screen bg-transparent ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <nav
            className={`absolute top-10 -right-5 rounded-tl-md rounded-bl-md shadow-md bg-white py-6 w-fit text-xl ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col">
              {listMenu.map((item, index) => (
                <li
                  key={index}
                  className={`w-full ${
                    item.link === pathname ? "bg-yellow" : "hover:bg-yellow"
                  } px-8 py-2`}
                >
                  <Link
                    href={item.link}
                    className="whitespace-nowrap w-full flex justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex justify-center w-full">
                <Link
                  href="#"
                  className="py-[10px] px-[18px] bg-yellow font-bold rounded-[5px] mt-2 mb-4"
                >
                  Mitra Petani
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
