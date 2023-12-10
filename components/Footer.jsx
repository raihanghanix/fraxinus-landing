"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  const links = [
    {
      title: "Beranda",
      link: path === "/" ? "#" : "/",
    },
    {
      title: "Produk",
      link: path === "/" ? "#produk" : "/#produk",
    },
    {
      title: "Panduan",
      link: path === "/" ? "#panduan" : "/#panduan",
    },
    {
      title: "Kontak",
      link: path === "/" ? "#kontak" : "/#kontak",
    },
    {
      title: "Blog",
      link: path === "/blog" ? "#" : "/blog",
    },
  ];

  return (
    <footer className="footer grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 max-[600px]:gap-10 items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold">Fraxinus</h1>
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <a href="https://wa.me/+6282320426161" target="_blank">
              +62 823 2042 6161
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <i className="fa-brands fa-instagram text-2xl"></i>
            <a
              href="https://www.instagram.com/nuansagarden_jbi/"
              target="_blank"
            >
              @fraxinus_jambi
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <i className="fa-solid fa-location-dot text-2xl"></i>
            <a href="#">Jln. Sei Bengkal RT.017 Simpang Rimbo</a>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 grid gap-5 grid-cols-2">
          {links.map((link) => (
            <a key={link.title} href={link.link} className="">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
