import { CustomButton } from "../../../components";

const RoadMap = () => {
  const data = [
    {
      id: 1,
      subTitle: "Phase 01",
      title: "Planning",
      list: [
        "Litepaper",
        "Whitepaper",
        "Users DID Provisioning",
        "HypeX Smart Contract Security...",
        "Initial CEX Listing Application",
      ],
      q: "Q1-Q2",
    },
    {
      id: 2,
      subTitle: "Phase 02",
      title: "Listing",
      list: [
        "MM Agreement",
        "Token Minting",
        "Token CEX Listing",
        "Token DEX Listing",
        "CoinGecko & CoinMarketCap ...",
      ],
      q: "Q3",
    },
    {
      id: 3,
      subTitle: "Phase 03",
      title: "Awareness",
      list: [
        "Community Growth Campaign",
        "Whitepaper V2",
        "Key Opinion Leader (KOL) Investors",
        "KOL Campaign",
      ],
      q: "Q3-Q4",
    },
    {
      id: 4,
      subTitle: "Phase 04",
      title: "Launch V1",
      list: [
        "KOL Campaign",
        "Seed Round Closed",
        "HypeVerse Version 1 Release",
        "Staking Program Launch",
      ],
      q: "Q4",
    },
    {
      id: 5,
      subTitle: "Phase 05",
      title: "Launch V2",
      list: [
        "HypeSwap Launch",
        "HypeScape Gaming Platform...",
        "HypeChain Development Kickoff",
      ],
      q: "Q5-Q8",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <h2>Roadmap</h2>

      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-7 md:gap-y-24">
        {data.map(
          (item: {
            subTitle: string;
            title: string;
            list: string[];
            q: string;
          }) => (
            <div className="flex justify-start">
              <RoadmapCard {...item} />
            </div>
          )
        )}

        <div className="relative flex flex-col justify-center items-start p-6 text-white border border-transparent border-white bg-clip-border rounded-xl w-[23rem]">
          <h3 className="md:text-[2rem] font-bold mb-5 leading-8">
            Potential <br /> Partnerships
          </h3>
          <span className="w-20 h-[1px] bg-gray-200"></span>

          <div className="flex items-center justify-center gap-5 mt-8">
            <img
              src="/Potential1.png"
              alt=""
              className="w-[70px] h-[70px object-contain]"
            />
            <img src="/Potential2.png" alt="" />
            <img src="/Potential3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadmapCard = ({
  subTitle,
  title,
  list,
  q,
}: {
  subTitle: string;
  title: string;
  list: string[];
  q: string;
}) => {
  return (
    <div className="relative flex flex-col p-6 text-white border border-transparent border-white bg-clip-border rounded-xl w-[23rem]">
      <h6 className="mb-6 text-base font-bold uppercase">{subTitle}</h6>
      <h3 className="text-[2rem] font-bold mb-5">{title}</h3>
      <span className="w-20 h-[1px] bg-gray-200"></span>

      <div className="flex flex-col gap-3 mt-4">
        {list.map((item: string, index: number) => (
          <div className="flex gap-2" key={index}>
            <img src="/checkIcon.svg" alt="" />
            <p className="text-lg leading-7 text-desc">{item}</p>
          </div>
        ))}
      </div>

      <CustomButton className="absolute rotate-[20deg] right-5">
        <span>{q}</span>
      </CustomButton>
    </div>
  );
};

export default RoadMap;
