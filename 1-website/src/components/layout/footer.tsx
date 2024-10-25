import Image from "next/image";
import React from "react";
import { TiktokIcon } from "../icons/tiktok";
import { InstagramIcon } from "../icons/instagram";
import Link from "next/link";
import { LinkedinIcon } from "../icons/linkedin";
import { YoutubeIcon } from "../icons/youtube";
import { WhatsappsIcon } from "../icons/whatsapps";
import { GlobeIcon } from "../icons/globe";

export const Footer = () => {
  return (
    <footer className="bg-green text-background container-parent">
      <div className="container flex flex-col gap-4 text-xs items-start py-8">
        <WhiteLogo className="hidden lg:block" />
        <div className="flex flex-row gap-4 items-start md:gap-8 lg:hidden">
          <div className="flex-1 flex flex-col items-start justify-start gap-4">
            <WhiteLogo className="block lg:hidden" />
            <div className="flex flex-col gap-2">
              <address>
                Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet,
                Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta
                12870, Indonesia
              </address>
              <address>Email : info.eratani@eratani.co.id</address>
              <address>Telephone : +62 811 952 2577</address>
            </div>
            <SocialMedia />
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5 md:min-w-56">
            <div className="flex flex-row items-center gap-2">
              <GlobeIcon />
              <button className="font-bold flex flex-col">
                <div className="h-[3px] w-full bg-transparent" />
                IN
                <div className="h-[3px] w-full bg-yellow" />
              </button>
              <button className="font-bold flex flex-col">
                <div className="h-[3px] w-full bg-transparent" />
                EN
                <div className="h-[3px] w-full bg-transparent" />
              </button>
            </div>
            <nav className="flex flex-col gap-2.5">
              <p className="font-bold text-sm">Menu</p>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "Tim Kami", link: "#" },
                  { name: "Mitra Petani", link: "#" },
                  { name: "Tips & Berita Pertanian", link: "#" },
                  { name: "Karir", link: "#" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:font-bold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-10 items-start justify-start gap-16">
          <div className="flex flex-col gap-2 w-fit col-span-2">
            <address className="mb-4">
              Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung
              Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870,
              Indonesia
            </address>
            <address>Email : info.eratani@eratani.co.id</address>
            <address>Telephone : +62 811 952 2577</address>
          </div>
          <nav className="col-span-4 flex flex-col gap-2.5 pl-8">
            <p className="font-bold text-lg">Menu</p>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Tim Kami", link: "#" },
                { name: "Mitra Petani", link: "#" },
                { name: "Tips & Berita Pertanian", link: "#" },
                { name: "Karir", link: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="hover:font-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col justify-between items-center h-full col-span-3">
            <div className="flex flex-row items-center gap-2 text-lg">
              <GlobeIcon width={24} height={24} />
              <button className="font-bold flex flex-col">
                <div className="h-[3px] w-full bg-transparent" />
                IN
                <div className="h-[3px] w-full bg-yellow" />
              </button>
              <button className="font-bold flex flex-col">
                <div className="h-[3px] w-full bg-transparent" />
                EN
                <div className="h-[3px] w-full bg-transparent" />
              </button>
            </div>
            <SocialMedia variant="large" />
          </div>
        </div>
        <p className="text-white text-center hidden lg:block w-full">
          Copyright © 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const WhiteLogo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-16 sm:w-20 md:w-32 lg:w-40 h-4 sm:h-5 md:h-8 lg:h-12 relative ${className}`}
    >
      <Image
        fill
        src="/logo-white.webp"
        alt="logo"
        className="object-contain object-left"
      />
    </div>
  );
};

const SocialMedia = ({
  variant = "small",
}: {
  variant?: "small" | "large";
}) => {
  const size = variant === "large" ? "24" : "12";
  const sizeWhatsapps = variant === "large" ? "36" : "18";
  return (
    <div
      className={`flex flex-row items-center justify-start ${
        variant === "large" ? "gap-8" : "gap42"
      }`}
    >
      <Link href="#">
        <TiktokIcon width={size} height={size} />
      </Link>
      <Link href="#">
        <InstagramIcon width={size} height={size} />
      </Link>
      <Link href="#">
        <LinkedinIcon width={size} height={size} />
      </Link>
      <Link href="#">
        <YoutubeIcon width={size} height={size} />
      </Link>
      <Link href="#">
        <WhatsappsIcon
          width={sizeWhatsapps}
          height={sizeWhatsapps}
          className="-translate-x-1"
        />
      </Link>
    </div>
  );
};
