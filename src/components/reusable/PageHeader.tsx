export const PageHeader = ({ text }: { text: string }) => {
  return (
    <h1 className="text-xl lg:text-4xl font-bold text-mainTurquoise uppercase absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-[100] w-full flex items-center justify-center tracking-tighter">
      {text}
    </h1>
  );
};
