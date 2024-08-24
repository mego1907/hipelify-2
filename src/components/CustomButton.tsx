import { twMerge } from "tailwind-merge";

type CustomButtonProps = {
  type?: "button" | "submit" | "reset";
  children: string | React.ReactNode;
  className?: string;
};

const CustomButton = ({
  type = "button",
  children,
  className,
}: CustomButtonProps) => {
  const defaultButtonProps =
    "bg-primary p-3 rounded-sm text-white px-5 text-base font-bold";

  return (
    <button type={type} className={twMerge(defaultButtonProps, className)}>
      {children}
    </button>
  );
};

export default CustomButton;
