import ClassCards from "@/components/landing-page/class-cards";
import DiscordCards from "@/components/landing-page/discord-cards";
import Header from "@/components/landing-page/header";
import { IntroCards } from "@/components/landing-page/intro-cards";
import Title from "@/components/landing-page/title";

export default async function Home() {
  return (
    <main className="flex flex-col items-center md:p-24 p-16">
      <div className="w-full md:max-w-4xl space-y-12">
        <Title />
        <ClassCards />
        <IntroCards />
        <DiscordCards />
      </div>
    </main>
  );
}
