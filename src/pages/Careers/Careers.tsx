import { CustomButton, ImageAndDescSection } from "../../components";
import FindTheJob from "./components/FindTheJob";
import LatestJobs from "./components/LatestJobs";

const Careers = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center text-white md:h-[50vh] h-[40vh] items-center justify-center">
        <h2 className="md:text-[5.1rem] font-semibold text-3xl md:mb-12 uppercase">
          Careers
        </h2>
        <p className="md:text-[1.6rem] text-xs">Home &gt; Careers</p>
      </div>

      <FindTheJob />

      <LatestJobs />

      <div className="pt-10 md:pt-32 md:pb-20">
        <ImageAndDescSection
          left={
            <div className="flex flex-col gap-6 mb-6 text-white md:mb-0">
              <h2 className="md:text-[3.8rem] md:leading-[4rem] text-2xl font-bold md:text-left text-center ">
                Share your CV <br /> with us!
              </h2>
              <p className="text-base tracking-wider text-center md:text-2xl text-desc md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.{" "}
              </p>
              <div className="flex items-center justify-center md:justify-start md:blok">
                <CustomButton>Upload CV</CustomButton>
              </div>
            </div>
          }
          right={
            <div className="flex justify-center">
              <img src="/Mask group (1).png" alt="" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Careers;
