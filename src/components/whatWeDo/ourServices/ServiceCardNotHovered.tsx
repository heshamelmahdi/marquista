const ServiceCardNotHovered = ({
  id,
  title,
}: {
  id: number;
  title: string;
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-transparent backdrop-blur-md justify-center items-center pt-5 pb-5 pl-1 pr-1">
      <div className="h-1/2 hidden lg:flex" />
      <div className="h-1/2 flex lg:flex-col justify-between items-center w-full">
        <h3 className="w-full text-center">Step {id}</h3>
        <h3 className="w-full text-center text-xs">{title}</h3>
      </div>
    </div>
  );
};
export default ServiceCardNotHovered;
