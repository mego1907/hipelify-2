const Publications = () => {
  return (
    <div className="flex flex-col mt-10 md:mt-32 md:mb-20 md:gap-20">
      <h2 className="text-2xl font-bold text-center text-white md:text-[3.8rem] md:mb-0 mb-3">
        Press
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="/Publications/Publications1.png"
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-4 pt-3 pl-5 border-l-2">
            <p className="text-base font-semibold text-white">
              30th June, 2024
            </p>
            <h5 className="text-base font-bold text-white">
              Lorem Ipsum is simply dummy text of the typesetting industry.
            </h5>
            <button type="button" className="text-xs p- pl-02 text-primaryDark">
              PDF Download
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <img
              src="/Publications/Publications2.png"
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-4 pt-3 pl-5 border-l-2">
            <p className="text-base font-semibold text-white">
              30th June, 2024
            </p>
            <h5 className="text-base font-bold text-white">
              Lorem Ipsum is simply dummy text of the typesetting industry.
            </h5>
            <button type="button" className="text-xs p- pl-02 text-primaryDark">
              PDF Download
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <img
              src="/Publications/Publications3.png"
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-4 pt-3 pl-5 border-l-2">
            <p className="text-base font-semibold text-white">
              30th June, 2024
            </p>
            <h5 className="text-base font-bold text-white">
              Lorem Ipsum is simply dummy text of the typesetting industry.
            </h5>
            <button type="button" className="text-xs p- pl-02 text-primaryDark">
              PDF Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
