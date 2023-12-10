import Image from "next/image";

const Steps = () => {
  return (
    <section
      id="panduan"
      className="flex flex-row mt-0 p-20 max-[500px]:px-10 items-center"
    >
      <div className="flex-1 flex justify-center items-center h-full">
        <div className="flex flex-col gap-10 py-4 px-20 max-md:px-0 w-full">
          <h1 className="font-bold text-5xl text-center max-[580px]:text-4xl">
            Panduan
          </h1>
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="flex flex-col text-center lg:flex-row lg:text-start p-10 gap-10 shadow border rounded items-center flex-1">
              <h1 className="font-bold text-green-500 text-4xl">1</h1>
              <p>
                Silahkan hubungi kami melewati WhatsApp atau Instagram kami.
              </p>
            </div>
            <div className="flex flex-col text-center lg:flex-row lg:text-start p-10 gap-10 shadow border rounded items-center flex-1">
              <h1 className="font-bold text-green-500 text-4xl">2</h1>
              <p>
                Silahkan lakukan pemesanan, tanyakan tentang stok, harga, dan
                sebagainya.
              </p>
            </div>
            <div className="flex flex-col text-center lg:flex-row lg:text-start p-10 gap-10 shadow border rounded items-center flex-1">
              <h1 className="font-bold text-green-500 text-4xl">3</h1>
              <p>Pesanan akan segera diantarkan!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
