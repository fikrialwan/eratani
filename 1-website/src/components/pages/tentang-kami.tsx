"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpIcon } from "../icons/arrow-up";

export default function TentangKami() {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY <= 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <section
        aria-label="hero"
        className="relative w-full h-screen lg:h-auto lg:aspect-[16/5] shadow-md"
      >
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-cover object-center"
        />
      </section>
      <section className="container-parent">
        <div className="container">
          <h1 className="text-2xl md:ext-[50px] font-bold text-center text-green mb-6 lg:mb-12">
            Tentang Kami
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <div className="relative aspect-video lg:aspect-square">
              <Image
                src="/tentang-kami.webp"
                alt="Tentang Kami"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo.webp"
                    alt="logo"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center lg:col-span-2 ">
              <p className="text-xs md:text-2xl md:leading-10">
                Eratani adalah perusahaan Agri-tech yang didirikan oleh anak
                bangsa. Berangkat dari mimpi dan semangat yang besar, Eratani
                memiliki misi untuk menyejahterakan petani nusantara dengan
                mempermudah jalannya proses pertanian dari hulu sampai hilir.
                <br className="lg:hidden" />
                <br className="lg:hidden" />
                Melalui digitalisasi proses hulu (pendanaan petani, pengelolaan
                rantai pasokan) hingga proses hilir (distribusi & penyaluran
                hasil panen), Eratani berfokus membangun ekosistem pertanian
                yang kuat dan berusaha memberikan kemudahan akses kepada petani
                dengan teknologi untuk meningkatkan produktivitas dan
                kesejahteraan ekosistem pertanian.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-parent">
        <div className="container">
          <h2 className="text-2xl md:ext-[50px] font-bold text-center text-green mb-6 lg:mb-12">
            Visi Eratani
          </h2>
          <p className="text-xs md:text-2xl md:leading-10 text-center">
            Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun
            ekosistem pertanian yang kuat dari hulu ke hilir, mulai dari
            pembiayaan, pengadaan barang, edukasi, sampai distribusi hasil panen
            dan memberikan kemudahan bagi petani untuk mendapatkan akses dengan
            dukungan teknologi untuk mensejahterahkan kehidupan petani di
            Indonesia kedepannya.
          </p>
        </div>
      </section>
      <section className="container-parent  mb-12">
        <div className="container">
          <h2 className="text-2xl md:ext-[50px] font-bold text-center text-green mb-6 lg:mb-12">
            Misi Eratani
          </h2>
          <ul className="text-xs md:text-2xl md:leading-10 space-y-2">
            {[
              "Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya.",
              "Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian.",
              "Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian.",
              "Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional.",
              "Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.",
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="min-w-2 max-w-2 min-h-2 max-h-2 md:min-w-4 md:max-w-4 md:min-h-4 md:max-h-4 bg-yellow rounded-full mt-1 md:mt-3 block" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed bottom-8 right-8 bg-yellow rounded-full h-[72px] w-[72px] hidden md:flex justify-center items-center ${
          isTop ? "opacity-0" : ""
        } transition-all duration-150 ease-in-out`}
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
