import React, { useState } from "react";
import { CustomButton } from "../../../components";
import { GamingDataTypes, SingleGameTypes } from "../../../types";
import { FaStar } from "react-icons/fa";

const DiveIntoHypescapeGaming = () => {
  return (
    <div className="flex flex-col md:mt-20">
      <div className="flex flex-col items-center justify-center text-white">
        <h2 className="md:text-[3.75rem] md:leading-[4rem] text-2xl mb-4 md:text-left text-center font-black">
          Dive into Hypescape Gaming
        </h2>
        <p className="text-base text-center text-white md:text-left md:text-2xl">
          Explore a variety of games from different publishers.
        </p>
      </div>

      <Games />
    </div>
  );
};

// Games
const Games = () => {
  const [selectedTab, setSelectedTab] = useState<string>("paid-games");

  const tabs = [
    { label: "Paid Games", value: "paid-games" },
    { label: "Free Games", value: "free-games" },
    { label: "Multi-Player Games", value: "multi-player" },
  ];

  const gamingData: GamingDataTypes = {
    "paid-games": [
      {
        image: "/images/games/1.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/2.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/3.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/4.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/1.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/2.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/3.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/4.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
    ],
    "free-games": [
      {
        image: "/images/games/1.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/2.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/3.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/4.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
    ],
    "multi-player": [
      {
        image: "/images/games/1.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/2.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/3.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
      {
        image: "/images/games/4.png",
        title: "Game Name",
        stars: "4",
        desc: "List the benefits of holding and using HypeX tokens within the ecosystem.",
        price: "$ 14.00",
      },
    ],
  };

  return (
    <div className="flex flex-col bg-games md:p-12 rounded-[2rem] mt-8 md:mb-0 mb-8">
      <div className="flex items-center justify-center gap-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab.value)}
            className={`text-white md:text-lg text-xs font-bold md:px-8 py-4 rounded-md ${
              selectedTab === tab.value
                ? "bg-primary text-white shadow-md border border-purple-400"
                : "border border-purple-400 "
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-4">
        {gamingData[selectedTab].map((game: SingleGameTypes) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </div>
  );
};

const GameCard = ({ image, title, desc, price, stars }: SingleGameTypes) => {
  return (
    <div className="flex flex-col p-4 text-white bg-gray2 rounded-2xl">
      {/* image */}
      <div className="w-full md:h-[13.65rem] rounded-2xl overflow-hidden">
        <img src={image} alt="" className="object-contain h-full w-ful" />
      </div>

      {/* Game name */}
      <div className="flex justify-between py-2 mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex">
          {Array.from({ length: parseInt(stars) }, (_, index) => (
            <FaStar className="text-yellow-500" key={index} />
          ))}
          {Array.from({ length: 5 - parseInt(stars) }, (_, index) => (
            <FaStar className="text-white" key={index} />
          ))}
        </div>
      </div>

      {/* Description */}
      <p>{desc}</p>

      <div className="flex justify-between mt-6">
        <CustomButton className="py-2 rounded-md">
          <span className="text-sm font-semibold text-white">Play Now</span>
        </CustomButton>
        <p className="font-bold text-primaryDark">{price}</p>
      </div>
    </div>
  );
};

export default DiveIntoHypescapeGaming;
