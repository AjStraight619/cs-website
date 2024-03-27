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
  const pathname = params.slug.split("/").join("");
  // const folderId = "1c6FZ7t5MUjFi8jiicgh1_mRd9XqkcZ8k";
  // const decodedCredentials = Buffer.from(
  //   process.env.GOOGLE_APPLICATION_CREDENTIALS!,
  //   "base64"
  // ).toString("utf8");
  // const credentialsJson = JSON.parse(decodedCredentials);
  // const auth = new google.auth.GoogleAuth({
  //   credentials: credentialsJson,
  //   scopes: ["https://www.googleapis.com/auth/drive"],
  // });

  // const drive = google.drive({ version: "v3", auth });

  // const driveResponse = await drive.files.list({
  //   q: `'${folderId}' in parents`, // Use the folder ID in the query
  //   pageSize: 10,
  //   fields: "files(id, name)",
  // });

  // const topics = driveResponse.data.files as TopicsType[];

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
