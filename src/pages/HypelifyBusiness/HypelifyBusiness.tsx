import CampaignJourney from "./components/CampaignJourney";
import HypelifyTargetingTools from "./components/HypelifyTargetingTools";
import Features from "./components/Features";
import { CustomButton } from "../../components";
import HypelifyClientsAndPartners from "./components/HypelifyClientsAndPartners";

const HypelifyBusiness = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <div className="flex flex-col text-center text-white md:h-[70vh] h-[80vh] items-center justify-center md:gap-0 gap-5">
        <h2 className="md:text-[5.1rem] md:leading-[6rem] font-semibold text-2xl uppercase">
          Hypelify <br /> for Business
        </h2>
        <p className="md:w-8/12 text-sm md:text-2xl text-desc md:leading-[3rem]">
          Hypelify revolutionises advertising by leveraging community
          connections and word-of-mouth engagement. Through customizable
          campaigns and innovative pay-for-engagement models, it maximises ROI
          and connects businesses with the vibrant Hypeverse community
        </p>
        <CustomButton className="md:p-6 md:mt-10 md:px-6 rounded-xl ">
          <span className="md:text-[1.7rem]">START YOUR FIRST CAMAPIGN</span>
        </CustomButton>
      </div>

      <Features />
      <HypelifyTargetingTools />
      <CampaignJourney />

      <HypelifyClientsAndPartners />
    </div>
  );
};

export default HypelifyBusiness;
