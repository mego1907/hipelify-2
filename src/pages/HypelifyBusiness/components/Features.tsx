const Features = () => {
  return (
    <div className="flex flex-col mb-10 md:mt-0 md:mb-0">
      <h2 className="md:text-[3.8rem] text-2xl text-center font-bold text-white md:mb-0 mb-3">
        Features
      </h2>

      <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-1 gap-8 md:py-10">
        <div className="flex flex-col items-center justify-center gap-6 p-10 text-white border-[0.1px] border-purple-400 rounded-3xl bg-white/5">
          <h4>Demographics</h4>

          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex flex-col text-white">
              <h6 className="font-bold md:text-2xl">60% </h6>
              <p className="md:text-base">Female</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-white">
              <h6 className="text-2xl font-bold">40% </h6>
              <p className="text-base">Male</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 p-10 text-white border-[0.1px] border-purple-400 md:py-20 rounded-3xl bg-white/5">
          <h4>Age distribution</h4>

          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">35% </h6>
              <p className="text-base">12-17</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">30% </h6>
              <p className="text-base">18-25</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">20% </h6>
              <p className="text-base">25-34</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">10% </h6>
              <p className="text-base">35-45</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">5% </h6>
              <p className="text-base">45+</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 p-10 text-white border-[0.1px] border-purple-400 rounded-3xl bg-white/5">
          <h4>Device Usage:</h4>

          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">95% </h6>
              <p className="text-base">Smartphones</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">3% </h6>
              <p className="text-base">tablets</p>
            </div>
            <span className="h-6 w-[1px] bg-white md:rotate-0 rotate-90"></span>
            <div className="flex flex-col text-center text-white">
              <h6 className="text-2xl font-bold">2% </h6>
              <p className="text-base">Laptops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
