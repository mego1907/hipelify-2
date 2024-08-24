const Footer = () => {
  const socialLinks = [
    {
      name: "Discard",
      img: "/social/discord.svg",
    },
    {
      name: "X",
      img: "/social/x.svg",
    },
    {
      name: "Instagram",
      img: "/social/Instagram.svg",
    },
    {
      name: "LinkedIn",
      img: "/social/LinkedIn.svg",
    },
    {
      name: "Medium",
      img: "/social/Medium.svg",
    },
    {
      name: "Telegram",
      img: "/social/Telegram.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between w-11/12 gap-10 p-5 px-5 mx-auto md:p-2 md:rounded-full rounded-3xl md:gap-0 md:flex-row bg-navbar">
      {/* Logo */}
      <img src="/logo.png" alt="" className="object-contain" />

      {/* pages links */}
      <div className="">
        <p className="text-sm font-bold text-white md:text-lg">
          Connect. Create. Conquer.
        </p>
      </div>
      <div className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <span key={link.name}>
            <img src={link.img} alt={link.img} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
