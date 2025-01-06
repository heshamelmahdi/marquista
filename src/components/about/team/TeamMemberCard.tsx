import { cn } from "@/lib/utils";

export function TeamMemberCard({
  bg,
  title,
  description,
  index,
}: {
  bg: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="w-[20rem] rounded-md">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden rounded-md relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `${bg} bg-cover`
        )}
      >
        <div className="text relative z-50 h-full flex flex-col justify-end">
          <h1
            className={cn(
              "font-bold text-xl md:text-3xl text-white relative group-hover:text-primary transition-all duration-75"
            )}
          >
            {title}
          </h1>
          <p className="font-normal text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
