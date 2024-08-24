const HeadQuarters = () => {
  return (
    <div className="flex flex-col text-white md:mt-40">
      <div className="grid md:grid-cols-2">
        <div className="text-center">
          <h2 className="md:text-[3.8rem] md:leading-[5rem] text-3xl md:mt-0 mt-5 font-bold">
            Head <br /> Quarters
          </h2>
        </div>

        <div className="flex flex-col gap-8 mb-10">
          <div className="flex flex-col mt-5 md:mt-0">
            <h2 className="md:text-[2.8rem] font-bold">Riyadh</h2>
            <p className="text-base md:text-2xl text-desc">
              Imam Abdullah Ibn Saud Ibn Abdulaziz Rd, Ishbiliyah, Riyadh 13225,
              3rd Floor - Office 303
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="md:text-[2.8rem] font-bold">Dubai</h2>
            <p className="text-base md:text-2xl text-desc">
              BAYVIEW TOWER - Office Number: 1805-031 Dubai – Business Bay -
              Makani No 25684 86128
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <img src="/HeadQuarters.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default HeadQuarters;
