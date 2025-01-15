import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { TeamMemberCard } from "./TeamMemberCard";

const TheTeam = () => {
  const teamMembers = [
    {
      bg: "bg-ahmed",
      title: "Ahmed El-Mahdi",
      description: "Co-Founder",
    },
    {
      bg: "bg-bahy",
      title: "Bahy Amer",
      description: "Co-Founder",
    },
    {
      bg: "bg-mostafa",
      title: "Mostafa Ahmed",
      description: "Co-Founder",
    },
    {
      bg: "bg-samar",
      title: "Samar Sabeck",
      description: "Co-Founder",
    },
  ];

  return (
    <section
      id="the-team"
      className="flex flex-col z-50 w-screen items-center gap-5"
    >
      {/* <SectionHeader
        topLine={theTeamHeader.topLine}
        description={theTeamHeader.description}
        line1={theTeamHeader.line1}
        line2={theTeamHeader.line2}
        className="text-white"
      /> */}
      <h1 className="text-primary text-4xl font-bold">Meet the Team</h1>
      <div className="hidden md:grid md:grid-cols-2 gap-2 xl:flex xl:flex-row w-fit">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            bg={member.bg}
            title={member.title}
            description={member.description}
            index={index}
          />
        ))}
      </div>
      <div className="flex md:hidden">
        <InfiniteMovingCards speed="fast" direction="left" pauseOnHover={false}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              bg={member.bg}
              title={member.title}
              description={member.description}
              index={index}
            />
          ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
};
export default TheTeam;
