import { useState } from "react";
import { ImageAndDescSection, PageTitle } from "../../components";
import Form from "../ContactUs/components/Form";
import HeadQuarters from "./Components/HeadQuarters";
import Publications from "./Components/Publications";

const AboutUs = () => {
  const buttonsData = ["Hypelify", "Hypeverse", "HypeChain"];

  const [selectedItem, setSelectedItem] = useState("Hypelify");

  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <PageTitle title="About Us" sub="Home &gt; About Us" />

      <div className="flex flex-col items-center justify-center md:mb-40 md:py-20 md:gap-10">
        <h2 className="text-xl font-black text-white md:text-title60">
          How it Works
        </h2>
        <p className="text-sm text-center text-white md:text-left md:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.
        </p>

        <div className="flex flex-col gap-5 mt-6 md:mt-10 md:flex-row">
          {buttonsData.map((button, index) => (
            <button
              key={index}
              type="button"
              className={`p-5 px-16 text-lg text-white bg-white/10 rounded-md ${
                selectedItem === button ? "border border-purple-400" : ""
              }`}
              onClick={() => setSelectedItem(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      <ImageAndDescSection
        imageJustifyCenter={false}
        right={
          <div className="flex items-center justify-center mt-5 md:mt-0">
            <img src="/images/about/about.png" alt="" />
          </div>
        }
        left={
          <div className="flex flex-col justify-center gap-10 pr-8 text-white">
            <div className="flex flex-col py-10 md:py-0">
              <h3 className="md:text-[5rem] text-2xl md:text-left text-center font-bold mb-3 md:mb-10">
                Vision
              </h3>
              <p className="text-base text-center md:text-left md:text-2xl text-white/85">
                At Hypelify we envision a digital haven where people’s voices
                are amplified. The all-in-one platform cultivates a stellar
                space to connect, create and conquer.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="md:text-[5rem] text-2xl md:text-left text-center font-bold mb-3 md:mb-10">
                Mission
              </h3>
              <p className="text-base text-center md:text-left md:text-2xl text-white/85">
                Our mission is to empower individuals and businesses through
                seamless social experiences. We open our community up to each
                other and to a world of opportunities.
              </p>
            </div>
          </div>
        }
      />

      <HeadQuarters />

      <div className="flex flex-col items-center justify-center gap-10 mt-10 md:pt-32">
        <h3 className="text-2xl font-black text-white md:text-title60">
          Get in Touch
        </h3>
        <Form />
      </div>

      <Publications />
    </div>
  );
};

export default AboutUs;
