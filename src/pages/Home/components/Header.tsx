import { CustomButton } from "../../../components";

const Header = () => {
  return (
    <div className="container flex items-center justify-center h-[80vh]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-28">
        <div className="flex flex-col">
          <h1 className="md:text-[3.1rem] md:leading-[3.5rem] text-3xl text-white font-semibold mb-2 flex flex-col">
            <span>Access</span>
            <span>the communities</span>
            <span>of your choice</span>
          </h1>
          <p className="text-desc md:text-[1.4rem]">
            First Social Network with Token Exchange and Transfers (tradeable)
          </p>
          <div>
            <CustomButton className="p-4 mt-5 md:px-12">
              <span className="text-sm">Try For Free</span>
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <img src="/images/header.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
