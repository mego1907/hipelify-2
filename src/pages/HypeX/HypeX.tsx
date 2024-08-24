import MeetTheAdvisors from "../../components/MeetTheAdvisors";
import Header from "./components/Header";
import HypeStudio from "./components/HypeStudio";
import RoadMap from "./components/Roadmap";

const HypeX = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <Header />
      <RoadMap />
      <div className="md:mt-20">
        <MeetTheAdvisors />
      </div>

      <HypeStudio />
    </div>
  );
};

export default HypeX;
