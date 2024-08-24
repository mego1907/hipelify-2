type PageTitleProps = {
  title: string | React.ReactNode;
  sub: string;
};

const PageTitle = ({ title, sub }: PageTitleProps) => {
  return (
    <div className="flex flex-col text-center text-white md:h-[50vh] h-[40vh] items-center justify-center">
      <h2 className="md:text-[5.1rem] font-semibold text-3xl md:mb-12 uppercase">
        {title}
      </h2>
      <p className="md:text-[1.6rem] text-xs">{sub}</p>
    </div>
  );
};

export default PageTitle;
