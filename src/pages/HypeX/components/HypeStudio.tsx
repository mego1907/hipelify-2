import { ImageAndDescSection } from "../../../components";
import { GoArrowUpRight } from "react-icons/go";

const HypeStudio = () => {
  return (
    <div className="flex flex-col mt-10 md:mt-32">
      <h2 className="text-white font-black md:text-[3.8rem] text-2xl md:mb-0 mb-5 text-center">
        HypeStudio
      </h2>

      <div className="flex flex-col gap-8 md:gap-0">
        <ImageAndDescSection
          left={
            <div className="flex items-center justify-center">
              <img src="/images/hypex/hypeStudio.png" alt="" />
            </div>
          }
          right={
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                01.
              </span>
              <h2 className="flex flex-col md:text-[3.5rem] text-2xl text-white md:leading-[3.7rem] font-black">
                <span>Setup and</span> <span>connect your</span>
                <span>wallet.</span>
              </h2>

              <p className="text-lg text-desc">
                Use Trust Wallet, Metamask or any wallet to connect to multiple
                chains the app.
              </p>

              <p className="text-lg text-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask
                or any wallet ipsam temporibus.
              </p>

              <button
                type="button"
                className="flex gap-2 items-center justify-center p-2 border-b-2 border-[#838383] text-white text-base font-bold"
              >
                <span>Learn more</span>
                <GoArrowUpRight fontSize={20} />
              </button>
            </div>
          }
        />

        <ImageAndDescSection
          right={
            <div className="flex items-center justify-center">
              <img src="/images/hypex/hypeStudio2.png" alt="" />
            </div>
          }
          left={
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                02.
              </span>
              <h2 className="flex flex-col md:text-[3.5rem] text-white text-3xl md:leading-[3.7rem] font-black">
                <span>Create your own</span>
                <span>digital artwork</span>
              </h2>

              <p className="text-lg text-desc">
                Quality comes first. we took our time to plan out everything and
                build our production pipeline for a good quality artwork's &
                digital artwork.
              </p>

              <p className="text-lg text-desc">
                Starting the production on the procedurally generated planets
                and the smart contract for minting.
              </p>

              <button
                type="button"
                className="flex gap-2 items-center justify-center p-2 border-b-2 border-[#838383] text-white text-base font-bold"
              >
                <span>Learn more</span>
                <GoArrowUpRight fontSize={20} />
              </button>
            </div>
          }
        />

        <ImageAndDescSection
          left={
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <img src="/images/hypex/hypeStudio3.png" alt="" />
            </div>
          }
          right={
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                03.
              </span>
              <h2 className="flex flex-col md:text-[3.5rem] text-white text-3xl md:leading-[3.7rem] font-black">
                <span>Choose a</span> <span>platform to sell</span>
                <span>your NFT</span>
              </h2>

              <p className="text-lg text-desc">
                Earn ETH and BIT for all your NFTs that you sell on our
                marketplace.
              </p>

              <p className="text-lg text-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque a officiis quasi autem!
              </p>

              <button
                type="button"
                className="flex gap-2 items-center justify-center p-2 border-b-2 border-[#838383] text-white text-base font-bold"
              >
                <span>Learn more</span>
                <GoArrowUpRight fontSize={20} />
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HypeStudio;
