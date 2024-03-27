import { people } from "@/lib/data";
import { IntroCard } from "./intro-card";
import { SectionDivider } from "./section-divider";

export const IntroCards = () => {
  return (
    <section className="mb-24">
      <SectionDivider>Meet The Team</SectionDivider>
      <div className="md:flex-row flex-col flex items-center justify-evenly gap-y-2 ">
        {people.map((person, index) => (
          <IntroCard key={index} {...person} />
        ))}
      </div>
    </section>
  );
};
