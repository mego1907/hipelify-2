import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

const LatestJobs = () => {
  const jobs = [{}, {}, {}];

  return (
    <div className="flex flex-col md:p-16 p-2 text-white bg-games md:rounded-[2.1rem] rounded-md mt-52">
      <h3 className="font-black text-white md:text-[3.8rem] text-2xl text-center mb-10">
        Latest Jobs Here
      </h3>

      {/* Tabs */}
      <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
        <div className="flex gap-5 mb-5 md:ml-3">
          <button
            type="button"
            className="p-3 px-6 mt-5 text-sm text-white border border-white md:text-lg rounded-xl"
          >
            Hot Jobs
          </button>
          <button
            type="button"
            className="p-3 px-6 mt-5 text-sm text-white border border-white md:text-lg rounded-xl"
          >
            Recent Jobs
          </button>
        </div>

        <div className="flex gap-1">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 p-0.5 rounded-full bg-primary"
          >
            <span className="flex items-center justify-center w-full h-full rounded-full bg-primaryDark2">
              <RiArrowLeftSLine fontSize={28} />
            </span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 p-0.5 rounded-full bg-primary"
          >
            <span className="flex items-center justify-center w-full h-full rounded-full bg-primaryDark2">
              <RiArrowRightSLine fontSize={28} />
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {jobs.map((job, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </div>
  );
};

const JobCard = () => {
  return (
    <div className="flex flex-col bg-[#31294A] rounded-3xl md:p-12 p-6">
      <div className="flex items-center justify-start gap-3 md:gap-6">
        <div className="flex items-center justify-center md:w-[66px] md:min-w-[66px] md:h-[66px] w-16 min-w-16 h-16 rounded-full bg-white/20">
          <img src="/images/job-icon.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold md:text-2xl">Job Type</h4>
          <p className="text-xs font-semibold md:text-base text-white/50">
            Company 5 Days Ago
          </p>
        </div>
      </div>

      <p className="my-3 text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <SlLocationPin />
          <span className="text-white/50">New York </span>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineBusinessCenter />
          <span className="text-white/50">Full Time</span>
        </div>
      </div>

      <div className="flex">
        <button
          type="button"
          className="p-2 px-4 mt-5 text-sm text-white border border-white rounded-md"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LatestJobs;
