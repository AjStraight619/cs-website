import { Topics } from "@/components/classes/topics";
import TopicsFetcher from "@/components/classes/topics-fetcher";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { TopicsType } from "@/lib/types";
import { google } from "googleapis";
import { Suspense } from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Topics</h1>
      <Suspense
        fallback={
          <div className="flex flex-col space-y-8 w-full md:w-40">
            {Array.from({ length: 9 }, (_, index) => (
              <Skeleton className="h-4 w-full" key={index} />
            ))}
          </div>
        }
      >
        <TopicsFetcher />
      </Suspense>
    </main>
  );
}
