import React from "react";

const InvertItButton = ({
  buttonText,
  onClick,
}: {
  buttonText: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 rounded-md bg-white text-black border-mainTurquoise font-bold transition duration-200 hover:bg-mainTurquoise hover:text-black border-2 border-transparent hover:border-white group"
    >
      {buttonText}
    </button>
  );
};
export default InvertItButton;
