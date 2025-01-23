import { cn } from "@/lib/utils";

const ExpandableCardNotHovered = ({
  middleText,
  title,
}: {
  middleText: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-transparent backdrop-blur-md justify-center items-center pt-5 pb-5 pl-1 pr-1">
      {middleText !== "" && <div className="h-1/2 hidden lg:flex" />}
      <div
        className={cn(
          "flex lg:flex-col items-center w-full",
          middleText === "" ? "h-full justify-center" : "h-1/2 justify-between"
        )}
      >
        {middleText !== "" && (
          <h3 className="max-lg:text-sm text-[0.5rem] 2xl:text-sm w-full text-center">
            {middleText}
          </h3>
        )}
        <h3 className="w-full text-center max-lg:text-sm text-[0.5rem] 2xl:text-sm">
          {title}
        </h3>
      </div>
    </div>
  );
};
export default ExpandableCardNotHovered;
