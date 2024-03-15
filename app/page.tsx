import ClassCards from "@/components/landing-page/class-cards";
import DiscordCards from "@/components/landing-page/discord-cards";
import { Divider } from "@/components/landing-page/divider";
import Header from "@/components/landing-page/header";
import Title from "@/components/landing-page/title";

export default async function Home() {
  let data;
  const response = await fetch("http://localhost:3000/api/google");
  if (response.ok) {
    data = await response.json();
  } else {
    console.log("something went wrong");
    data = "something went wrong";
  }

  return (
    <main className="flex min-h-screen flex-col  items-center p-24">
      <div className="w-full md:max-w-3xl h-full space-y-12">
        <Header />
        <div className="my-16"></div>
        <Title />

        <ClassCards />
        <DiscordCards />
      </div>
    </main>
  );
}
