"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const path = usePathname();

  const links = [
    {
      title: "Beranda",
      link: path === "/" ? "#" : "/",
      icon: "fa-solid fa-house",
    },
    {
      title: "Produk",
      link: path === "/" ? "#produk" : "/#produk",
      icon: "fa-solid fa-box",
    },
    {
      title: "Panduan",
      link: path === "/" ? "#panduan" : "/#panduan",
      icon: "fa-solid fa-circle-question",
    },
    {
      title: "Kontak",
      link: path === "/" ? "#kontak" : "/#kontak",
      icon: "fa-solid fa-phone-volume",
    },
    {
      title: "Blog",
      link: path === "/blog" ? "#" : "/blog",
      icon: "fa-solid fa-square-rss",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav ${
        isScrolled ? "shadow" : "shadow-transparent"
      } transition-shadow`}
    >
      <a
        href={path === "/" ? "#" : "/"}
        className="font-bold flex gap-5 items-center hover:scale-105 max-[500px]:hidden"
      >
        <Image
          className="rounded-full object-contain aspect-square max-[400px]:hidden"
          src="/fraxinus_logo.png"
          alt="Logo"
          width={32}
          height={32}
          fill={false}
        />
        <p className="max-md:hidden">Fraxinus</p>
      </a>
      <div className="flex gap-5 text-sm items-center justify-normal max-[500px]:justify-between max-[500px]:w-full">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.link}
            className="hover:scale-105 hover:text-green-500 flex items-center"
          >
            <p className="sm:hidden">
              <i className={`${link.icon}`}></i>
            </p>
            <p className="max-sm:hidden">{link.title}</p>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
