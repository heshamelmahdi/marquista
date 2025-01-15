import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { mainBentoGridCopy } from "@/utils/copy";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import Deck from "./contentCreated/CardStack";
import styles from "./contentCreated/deck.module.css";
import CardSpread from "./commercialsProduced/CardSpread";
import Image from "next/image";
import InvertItButton from "@/components/ui/buttons/invert-it";
import { openWhatsAppChat } from "@/utils/socialActions";
import Deck from "./contentCreated/CardStackNew";

const CountUpComponent = ({
  count,
  title,
}: {
  count: number;
  title: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  return (
    <div ref={ref}>
      {inView && <CountUp end={count} duration={5} />}
      <span>+</span>
      <span> {title}</span>
    </div>
  );
};
// *********************************
// CONTENT CREATION COMPONENTS START
// *********************************

const ContentCreationTitle = () => {
  return CountUpComponent({
    count: mainBentoGridCopy.contentCreated,
    title: mainBentoGridCopy.contentCreatedTitle,
  });
};

const ContentCreationHeader = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardArray = [
    "https://img.freepik.com/free-vector/hand-drawn-mystic-wallpaper_23-2149459343.jpg?w=200&t=st=1693752764~exp=1693753364~hmac=0c22308268d0530c17aaf56cd4538df752f4fbfc4c656e2d5d52bc377306ad72",
    "https://img.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_52683-80184.jpg?w=200&t=st=1693752654~exp=1693753254~hmac=13676d093355eb79e301ea51da805048b4dc22c5a288d71f4b9f48bce0b93e42",
    "https://img.freepik.com/free-vector/flat-design-tarot-card-illustration_23-2149243577.jpg?w=200&t=st=1693752799~exp=1693753399~hmac=b925a46d7bc082c857a1377fd3f4665ebaabdc12184511ab570827d8744d528c",
    "https://img.freepik.com/free-vector/crystal-ball-stars_24877-76344.jpg?w=200&t=st=1693752848~exp=1693753448~hmac=56c273fbd0a3baa74a530e66e947e4974160dd16fb0e8ee9a6be25e460e161aa",
    "https://img.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_52683-80183.jpg?w=200&t=st=1693752969~exp=1693753569~hmac=91359d781549c1b817aa5183ff8272753dd53272023adb08d161ff9e6bf5c549",
  ];

  return (
    <div ref={ref} className={styles.container}>
      {inView && <Deck cardList={cardArray} />}
    </div>
  );
};

const contentCreation = {
  title: <ContentCreationTitle />,
  description: (
    <span className="text-sm">{mainBentoGridCopy.contentCreatedSubtitle}</span>
  ),
  header: <ContentCreationHeader />,
  className: "md:col-span-1",
  icon: "",
  children: null,
};

// *******************************
// CONTENT CREATION COMPONENTS END
// *******************************

// *************************************
// COMMERCIALS PRODUCED COMPONENTS START
// *************************************

const CommercialsProducedTitle = () => {
  return CountUpComponent({
    count: mainBentoGridCopy.commercialsProduced,
    title: mainBentoGridCopy.commercialsProducedTitle,
  });
};

const CommercialsProducedHeader = () => {
  const commercials = [
    "https://img.freepik.com/free-vector/hand-drawn-mystic-wallpaper_23-2149459343.jpg?w=200&t=st=1693752764~exp=1693753364~hmac=0c22308268d0530c17aaf56cd4538df752f4fbfc4c656e2d5d52bc377306ad72",
    "https://img.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_52683-80184.jpg?w=200&t=st=1693752654~exp=1693753254~hmac=13676d093355eb79e301ea51da805048b4dc22c5a288d71f4b9f48bce0b93e42",
    "https://img.freepik.com/free-vector/flat-design-tarot-card-illustration_23-2149243577.jpg?w=200&t=st=1693752799~exp=1693753399~hmac=b925a46d7bc082c857a1377fd3f4665ebaabdc12184511ab570827d8744d528c",
    "https://img.freepik.com/free-vector/crystal-ball-stars_24877-76344.jpg?w=200&t=st=1693752848~exp=1693753448~hmac=56c273fbd0a3baa74a530e66e947e4974160dd16fb0e8ee9a6be25e460e161aa",
    "https://img.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_52683-80183.jpg?w=200&t=st=1693752969~exp=1693753569~hmac=91359d781549c1b817aa5183ff8272753dd53272023adb08d161ff9e6bf5c549",
  ];

  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <CardSpread images={commercials} />
    </div>
  );
};

const commercialsProduced = {
  title: <CommercialsProducedTitle />,
  description: (
    <span className="text-sm">
      {mainBentoGridCopy.commercialsProducedSubtitle}
    </span>
  ),
  header: <CommercialsProducedHeader />,
  className: "md:col-span-2",
  icon: "",
  children: null,
};

// ***********************************
// COMMERCIALS PRODUCED COMPONENTS END
// ***********************************

// *********************************
// FOOTAGE RECORDED COMPONENTS START
// *********************************

const FootageRecordedTitle = () => {
  return CountUpComponent({
    count: mainBentoGridCopy.footageCaptured,
    title: mainBentoGridCopy.footageCapturedTitle,
  });
};

const FootageRecordedHeader = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Image
        src={"/editing.jpg"}
        alt="Editing timeline"
        className="object-cover"
        width={1440}
        height={960}
      />
    </div>
  );
};

const footageRecorded = {
  title: <FootageRecordedTitle />,
  description: (
    <span className="text-sm">{mainBentoGridCopy.footageCapturedSubtitle}</span>
  ),
  header: <FootageRecordedHeader />,
  className: "md:col-span-1",
  icon: "",
  children: null,
};

// *******************************
// FOOTAGE RECORDED COMPONENTS END
// *******************************

// ***************************
// WHAT WE DO COMPONENTS START
// ***************************

const WhatWeDoHeader = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Image
        src={"/bts.webp"}
        alt="Editing timeline"
        className="object-cover"
        width={1268}
        height={847}
      />
    </div>
  );
};

const whatWeDo = {
  title: mainBentoGridCopy.whatWeDoTitle,
  description: (
    <span className="text-sm">{mainBentoGridCopy.whatWeDoSubtitle}</span>
  ),
  header: <WhatWeDoHeader />,
  className: "md:col-span-1",
  icon: "",
  children: null,
};

// *************************
// WHAT WE DO COMPONENTS END
// *************************

const ButtonText = (
  <span className="text-base font-semibold flex gap-2 items-center justify-center">
    Get in touch{" "}
    <FaWhatsappSquare className="font-bold h-6 w-6 text-green-500 group-hover:text-black transition duration-200" />
  </span>
);

const GetInTouch = () => {
  return (
    <div className="text-white w-full h-full flex flex-col gap-2 justify-center items-center">
      <InvertItButton buttonText={ButtonText} onClick={openWhatsAppChat} />
    </div>
  );
};

export const items = [
  whatWeDo,
  contentCreation,
  footageRecorded,
  commercialsProduced,
  {
    title: "",
    description: "",
    header: "",
    className: "md:col-span-1",
    icon: "",
    children: <GetInTouch />,
  },
];
