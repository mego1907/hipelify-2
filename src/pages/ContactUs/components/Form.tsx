import { CustomButton } from "../../../components";

const Form = () => {
  // bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded

  return (
    <div className="grid grid-cols-1 py-10 text-white md:grid-cols-2 md:pb-32">
      <div className="flex flex-col mb-10 md:text-2xl md:items-center md:mb-0">
        <div className="">
          <h4>Email :</h4>
          <p>info@hypelify.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="p-[2px] gap-8 bg-primary rounded-xl w-full">
            <input
              type="text"
              className="w-full p-4 px-8 outline-none bg-secondary rounded-xl"
              placeholder="First Name"
            />
          </div>
          <div className="p-[2px] bg-primary rounded-xl w-full">
            <input
              type="text"
              className="w-full p-4 px-8 outline-none bg-secondary rounded-xl"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="p-[2px] gap-8 bg-primary rounded-xl w-full">
            <input
              type="text"
              className="w-full p-4 px-8 outline-none bg-secondary rounded-xl"
              placeholder="Phone"
            />
          </div>
          <div className="p-[2px] bg-primary rounded-xl w-full">
            <input
              type="text"
              className="w-full p-4 px-8 outline-none bg-secondary rounded-xl"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="p-[2px] gap-8 bg-primary rounded-xl w-full">
          <textarea
            className="w-full p-4 px-8 outline-none bg-secondary rounded-xl"
            placeholder="Phone"
            rows={7}
          />
        </div>

        <div>
          <label className="flex items-center">
            <input type="checkbox" className="w-6 h-6 bg-transparent" />
            <span className="ml-2 text-sm md:text-lg">
              I agree to the Terms & Conditions and Privacy Policy
            </span>
          </label>
        </div>

        <div>
          <CustomButton className="px-7">
            <span>Contact Us</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Form;
