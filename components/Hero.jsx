import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="section flex flex-row max-lg:flex-col">
      <div className="flex-1 flex justify-center items-center h-full">
        <div className="flex flex-col gap-10 py-4 px-20 max-[500px]:px-10 pt-16 w-full max-sm:items-center">
          <h1 className="font-bold text-6xl max-sm:text-5xl max-[580px]:text-4xl">
            Fraxinus
          </h1>
          <p className="leading-relaxed text-neutral-500 max-sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            obcaecati soluta optio ducimus nobis voluptatem quos. Libero
            voluptas voluptatibus, architecto ratione perspiciatis cupiditate
            sit, optio nisi esse quod vero minima.
          </p>
          <div className="flex gap-5 w-full">
            <a
              href="#produk"
              className="bg-green-500 text-white py-3 px-5 rounded hover:scale-105 shadow max-sm:w-full max-sm:text-center"
            >
              Produk Kami
            </a>
            <a
              href="#kontak"
              className="border border-black py-3 px-5 rounded hover:scale-105 shadow max-sm:w-full max-sm:text-center"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center h-full relative">
        <Image
          className="object-cover object-right brightness-75 contrast-75 saturate-150 p-10 px-20 max-[500px]:px-10 pt-32 max-lg:pt-0 "
          src="/img.jpg"
          alt="Gambar Kebun Fraxinus"
          fill={true}
        />
      </div>
    </section>
  );
};

export default Hero;
