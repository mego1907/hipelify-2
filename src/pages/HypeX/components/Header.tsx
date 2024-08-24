import { CustomButton } from "../../../components";

const Header = () => {
  return (
    <div className="container flex items-center justify-center md:h-[80vh] h-screen">
      <div className="grid md:grid-cols-2 md:gap-20">
        <div className="flex flex-col mb-5 md:mb-0">
          <h1 className="md:text-[4.5rem] text-white md:leading-[5.65rem] flex flex-col font-extrabold md:text-left text-center">
            <span>Hypelify’s very</span>
            <span>own Token</span>
          </h1>
          <p className="text-2xl text-desc">
            First Social Network with Token Exchange and Transfers (tradeable)
          </p>
          <div className="flex justify-center md:justify-start">
            <CustomButton className="p-4 px-20 mt-5">
              <span className="text-sm">BUY NOW</span>
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src="/images/hypex/hypex.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
