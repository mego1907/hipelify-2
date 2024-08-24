import { BannerStoresTypes } from "../../types";
import DiveIntoHypescapeGaming from "./components/DiveIntoHypescapeGaming";
import Header from "./components/Header";
import Hypelifiers from "./components/Hypelifiers";

const Home = () => {
  const data: BannerStoresTypes = [
    {
      name: "scan",
      // image: "/images/banner/qr.png",
      image: "/public/images/banner/qr-code.svg",
      link: "",
    },
    {
      name: "app-store",
      image: "/public/images/banner/app-store.svg",
      link: "",
    },
    {
      name: "google-play",
      image: "/public/images/banner/google-play.svg",
      link: "",
    },
    {
      name: "huawei",
      image: "/public/images/banner/h.svg",
      link: "",
    },
  ];

  return (
    <div className="flex flex-col pt-32">
      <Header />
      <Hypelifiers />
      <DiveIntoHypescapeGaming />

      <div className="flex bg-imageBanner w-full md:h-[25rem] h-[10rem] bg-cover bg-no-repeat rounded-3xl bg-center md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col pt-4 pl-4 md:pt-0 md:items-center md:justify-center md:pl-20">
            <h2 className="md:text-[3.1rem] text-xs font-black flex flex-col text-white md:leading-[3.4rem]">
              <span>Download</span>
              <span>Hypelify App</span>
              <span>For Free</span>
            </h2>

            <div className="flex items-center justify-center gap-2 mt-10 -translate-x-1 md:p-10 md:translate-x-0 md:pl-20 md:mt-6">
              {data.map((item) => {
                return (
                  <a href={item.link} key={item.name}>
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover w-full"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
