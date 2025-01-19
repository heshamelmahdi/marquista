import { FaWhatsappSquare } from "react-icons/fa";
import { mainBentoGridCopy } from "@/utils/copy";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./contentCreated/deck.module.css";
import CardSpread from "./commercialsProduced/CardSpread";
import Image from "next/image";
import InvertItButton from "@/components/ui/buttons/invert-it";
import { openWhatsAppChat } from "@/utils/socialActions";
import Deck from "./contentCreated/CardStack";

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
    "https://storage.googleapis.com/bts-photos/11.JPG",
    "https://storage.googleapis.com/bts-photos/5.JPG",
    "https://storage.googleapis.com/bts-photos/46.JPG",
    "https://storage.googleapis.com/bts-photos/146.JPG",
    "https://storage.googleapis.com/bts-photos/112.JPG",
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
    "https://storage.googleapis.com/bts-photos/1.JPG",
    "https://storage.googleapis.com/bts-photos/69.JPG",
    "https://storage.googleapis.com/bts-photos/10.JPG",
    "https://storage.googleapis.com/bts-photos/13.JPG",
    "https://storage.googleapis.com/bts-photos/53.JPG",
  ];

  return (
    <div className="flex items-center justify-center h-full w-full min-h-[200px] relative">
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
