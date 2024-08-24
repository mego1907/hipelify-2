const HypelifyClientsAndPartners = () => {
  const data = [
    "/clientsAndParteners/1.svg",
    "/clientsAndParteners/2.svg",
    "/clientsAndParteners/3.svg",
    "/clientsAndParteners/4.svg",
    "/clientsAndParteners/5.svg",
    "/clientsAndParteners/6.svg",
    "/clientsAndParteners/7.svg",
    "/clientsAndParteners/8.svg",
    "/clientsAndParteners/9.svg",
    "/clientsAndParteners/10.svg",
  ];

  return (
    <div className="py-10 md:py-20">
      <h2 className="md:text-[3.8rem] text-xl font-extrabold text-white text-center md:mb-16 mb-5">
        Hypelify Clients and Partners
      </h2>

      <div className="flex flex-wrap items-center justify-center p-6 py-20 border md:gap-x-28 gap-x-10 gap-y-10 md:gap-y-20 bg-white/5 rounded-3xl">
        {data.map((src, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={src} alt="" className="object-contain w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HypelifyClientsAndPartners;
