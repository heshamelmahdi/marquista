import Card from "./Card";

const CardSpread = ({ images }: { images: Array<string> }) => {
  return (
    <div className="relative flex w-full h-[100%] z-[9999999]">
      {images.map((image, index) => {
        return <Card key={index} image={image} index={index} />;
      })}
    </div>
  );
};
export default CardSpread;
