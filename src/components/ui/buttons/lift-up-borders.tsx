const LiftUpBorders = ({
  text,
  onClick,
}: {
  text: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-mainTurquoise to-mainTurquoise rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:text-black">
        {text}
      </div>
    </button>
  );
};
export default LiftUpBorders;
