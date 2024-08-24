import React from "react";

const Hypelifiers = () => {
  const data = [
    {
      image: "/images/hypelifiers/1.png",
      text: "How do active users get access to revenue-streams in-app?",
    },
    {
      image: "/images/hypelifiers/2.png",
      text: "By sharing campaigns and referrals to their network",
    },
    {
      image: "/images/hypelifiers/3.png",
      text: "By viewing partner campaigns",
    },
    {
      image: "/images/hypelifiers/4.png",
      text: "By leveraging Live Features",
    },
  ];

  return (
    <div className="relative flex flex-col">
      <h2 className="text-white md:text-[3.8rem] font-black text-2xl uppercase text-center">
        Hypelifiers
      </h2>

      <img
        src="/images/hypelifiers/hypelifiers-mobile.png"
        alt=""
        className="w-[30rem]"
      />

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4 md:absolute top-1/2 -translate-y-1/3 left-7">
        {data.map((item, index) => (
          <HypelifiersCard key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

const HypelifiersCard = ({
  image,
  text,
  index,
}: {
  index: number;
  image: string;
  text: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center px-8 rounded-2xl ${
        index === 0 ? "bg-primary" : "border border-purple-400  gap-6 "
      }`}
    >
      <img src={image} alt="" />

      <h4
        className={`text-white text-lg font-black text-left  ${
          index === 0 ? "-translate-y-7" : ""
        }`}
      >
        {text}
      </h4>
    </div>
  );
};

export default Hypelifiers;
