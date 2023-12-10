import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="kontak"
      className="flex flex-row max-lg:flex-col gap-10 mt-0 py-20 px-20 max-[500px]:px-10 items-center relative bg-[url('/waves.svg')] bg-no-repeat bg-center bg-cover shadow-inner"
    >
      <div className="flex-1 flex justify-center items-center h-full">
        <div className="flex flex-col gap-10 py-4 px-20 max-lg:px-0 w-full">
          <h1 className="font-bold text-5xl max-sm:text-5xl max-[580px]:text-4xl max-lg:text-center">
            Kontak Kami
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <i className="fa-brands fa-whatsapp text-2xl text-neutral-500"></i>
              <a
                href="https://wa.me/+6282320426161"
                target="_blank"
                className="underline"
              >
                +62 823 2042 6161
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <i className="fa-brands fa-instagram text-2xl text-neutral-500"></i>
              <a
                href="https://www.instagram.com/nuansagarden_jbi/"
                target="_blank"
                className="underline"
              >
                @fraxinus_jambi
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <i className="fa-solid fa-location-dot text-2xl text-neutral-500"></i>
              <a href="#" className="underline">
                Jln. Sei Bengkal RT.017 Simpang Rimbo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center h-full">
        <Image
          className="object-contain  py-4 px-20"
          src="/waves2.svg"
          alt="kontak"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
};

export default Contact;
