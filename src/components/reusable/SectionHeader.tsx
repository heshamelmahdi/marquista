const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full h-full">
      <h1 className="text-4xl font-bold text-mainTurquoise">{title}</h1>
      <p className="text-neutral-300 text-base text-pretty text-justify">
        {description}
      </p>
    </div>
  );
};
export default SectionHeader;
