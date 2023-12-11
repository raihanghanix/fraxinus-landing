import Image from "next/image";

const bunga = [
  {
    nama: "Philo Squamiferum",
    url: "/1.jpg",
  },
  {
    nama: "Red Anja (Big Size)",
    url: "/2.jpg",
  },
  {
    nama: "Melano",
    url: "/3.jpg",
  },
  {
    nama: "Lady Valentine",
    url: "/4.jpg",
  },
];

const Product = () => {
  return (
    <section
      id="produk"
      className="min-[876px]:section py-20 min-[876px]:py-0 flex flex-col justify-center items-center gap-10 px-20 max-[580px]:px-10 relative bg-[url('/waves.svg')] bg-no-repeat bg-center bg-cover shadow-inner"
    >
      <h1 className="font-bold text-6xl max-[580px]:text-4xl">Produk Kami</h1>
      <p className="max-[580px]:w-full w-[80%] lg:w-[60%] text-center text-neutral-500">
        Berikut adalah empat produk terpopuler dan teratas kami. Diantaranya
        adalah Philo Squamiferum, Red Anja (Big Size), Melano, dan Lady
        Valentine.
      </p>
      <div className="grid grid-cols-4 max-[876px]:grid-cols-2 gap-5">
        {bunga.map((item) => (
          <div
            key={item.nama}
            className="border p-5 rounded shadow flex flex-col gap-5 bg-white items-center"
          >
            <Image
              className="aspect-square"
              src={item.url}
              alt={item.nama}
              width={200}
              height={200}
            />
            <h1 className="text-center font-bold">{item.nama}</h1>
          </div>
        ))}
      </div>
      <p className="text-center">
        Silahkan lihat Instagram kami untuk produk lainnya!
      </p>
    </section>
  );
};

export default Product;
