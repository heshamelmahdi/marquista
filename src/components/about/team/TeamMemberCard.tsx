import { cn } from "@/lib/utils";

export function TeamMemberCard({
  bg,
  title,
  description,
}: {
  bg: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="w-[20rem] rounded-md relative h-full group">
      <div
        className={cn(
          "w-full cursor-pointer overflow-hidden rounded-md relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent transition-all duration-300 group-hover:grayscale",
          `${bg} bg-cover`
        )}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-2 pl-5">
        <h1
          className={cn(
            "font-bold text-xl md:text-3xl text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
          )}
        >
          {title}
        </h1>
        <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 font-normal text-primary relative my-4">
          {description}
        </p>
      </div>
    </div>
  );
}
