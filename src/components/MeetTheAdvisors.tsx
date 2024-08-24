const MeetTheAdvisors = () => {
  const advisors = [
    {
      name: "Mohammed Saleh",
      role: "Web3 Consultant",
      image: "/advisors/1.png",
    },
    {
      name: "Alaa Batayneh",
      role: "Web3 Advisory",
      image: "/advisors/2.png",
    },
    {
      name: "Steven Sprague",
      role: "Marketing Advsiory",
      image: "/advisors/3.png",
    },
  ];
  return (
    <div className="flex flex-col">
      <h3 className="pb-2 text-2xl font-bold text-center text-white md:pb-6 md:text-6xl">
        Meet the Advisors
      </h3>

      <div className="grid md:grid-cols-3 gap-9">
        {advisors.map((member, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheAdvisors;
