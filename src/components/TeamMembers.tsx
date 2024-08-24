import { RiLinkedinFill } from "react-icons/ri";
import MeetTheAdvisors from "./MeetTheAdvisors";

const TeamMembers = ({ showAdvisors = true }: { showAdvisors: boolean }) => {
  const members = [
    {
      name: "Ahmad Khanfar",
      role: "Founder & CEO",
      image: "/team/1.png",
    },
    {
      name: "Mohamed Hegazy",
      role: "CCO",
      image: "/team/2.png",
    },
    {
      name: "Tamer Radwan",
      role: "CFO",
      image: "/team/3.png",
    },
    {
      name: "Malak Jarar",
      role: "CMO",
      image: "/team/4.png",
    },
    {
      name: "Ahmad Yousef",
      role: "Head of BD",
      image: "/team/5.png",
    },
    {
      name: "Marco Thomas",
      role: "Creative Director",
      image: "/team/6.png",
    },
    {
      name: "Maryam Abouelhawa",
      role: "Motion Graphic Designer",
      image: "/team/7.png",
    },
    {
      name: "Bassem Bassam",
      role: "Senior community manager",
      image: "/team/8.png",
    },
    {
      name: "Merna Elshekhaiby",
      role: "Social Media Manager",
      image: "/team/9.png",
    },
    {
      name: "Asmaa Mohamed",
      role: "Account Manager",
      image: "/team/10.png",
    },
    {
      name: "Abdel Rahman",
      role: "Flutter Developer",
      image: "/team/11.png",
    },
    {
      name: "Howaida Mansour",
      role: "Backend Developer",
      image: "/team/12.png",
    },
    {
      name: "Mohamed Saeed",
      role: "CTO",
      image: "/team/13.png",
    },
    {
      name: "Mohamed Fathy",
      role: "Senior Backend developer",
      image: "/team/14.png",
    },
    {
      name: "Ahmed Yasser",
      role: "Flutter Developer",
      image: "/team/15.png",
    },
    {
      name: "Abdel Rahman ",
      role: "Graphic Designer",
      image: "/team/16.png",
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <div className="grid mb-32 md:grid-cols-4 gap-9 gap-y-32">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 text-center text-white"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover rounded-full grayscale"
              />
            </div>
            <div>
              <h3 className="md:text-[1.6rem] text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-sm font-semibold md:text-xl">{member.role}</p>
            </div>

            <button
              type="button"
              className="bg-[#0A78B5] flex gap-2 items-center justify-center p-2 px-4 rounded-sm"
            >
              <span>Linked Profile</span>
              <RiLinkedinFill />
            </button>
          </div>
        ))}
      </div>

      {showAdvisors && <MeetTheAdvisors />}
    </div>
  );
};

export default TeamMembers;
