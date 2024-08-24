import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CustomButton } from "../../../components";

const FindTheJob = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="md:text-[3.8rem] md:leading-[4.6rem] text-2xl font-bold text-white text-center">
        Find the job that fits your life
      </h2>
      <p className="text-sm leading-10 text-center text-white md:text-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </p>

      <div className="flex items-center justify-center mt-6">
        <div className="flex flex-col md:flex-row bg-white/10 ">
          <div className="flex md:flex-row flex-col border-[0.1px] md:border-purple-400 rounded">
            <div className="flex items-center justify-center gap-2 p-6 text-white">
              <AiOutlineFileSearch fontSize={22} />
              <input
                type="text"
                className="text-lg bg-transparent outline-none placeholder:text-white"
                placeholder="Search By Keyword"
              />
            </div>
            <span className="md:w-[1px] w-10/12 md:h-6 h-[1px] md:my-auto mx-auto bg-white"></span>
            <div className="flex items-center justify-center gap-2 p-6 text-white">
              <HiOutlineLocationMarker fontSize={22} />
              <input
                type="text"
                className="text-lg bg-transparent outline-none placeholder:text-white"
                placeholder="Location"
              />
            </div>
          </div>
          <CustomButton className="px-16">
            <span>Search Job</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FindTheJob;
