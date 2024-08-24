type ImageAndDescSectionProps = {
  right: React.ReactNode;
  left: React.ReactNode;
  imageFirst?: boolean;
  gap?: string; // "gap-x-4" | "gap-y-4" | "gap-x-8" | "gap-y-8" | "gap-x-12" | "gap-y-12" | "gap-x-16" | "gap-y-16" | "gap-x-20" | "gap-y-20" | "gap-x-24" |
  imageJustifyCenter?: boolean;
};

const ImageAndDescSection = ({
  right,
  left,
  gap = "",
  imageJustifyCenter = true,
}: ImageAndDescSectionProps) => {
  return (
    <div className={`grid md:grid-cols-2 grid-cols-1 ${gap}`}>
      <div
        className={`flex flex-col ${imageJustifyCenter && "justify-center"}`}
      >
        {left}
      </div>
      <div className="flex flex-col justify-center">{right}</div>
    </div>
  );
};

export default ImageAndDescSection;
