import PdfDisplay from "@/components/classes/pdf-display";
import { GoogleDriveFile } from "@/lib/types";
import { google } from "googleapis";

export type TopicsPageProps = {
  params: {
    id: string;
  };
};

type FileGroup = Record<string, GoogleDriveFile[]>;

export default async function TopicPage({ params }: TopicsPageProps) {
  console.log(params.id);
  const decodedCredentials = Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS!,
    "base64"
  ).toString("utf8");
  const credentialsJson = JSON.parse(decodedCredentials);
  const auth = new google.auth.GoogleAuth({
    credentials: credentialsJson,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  const driveResponse = await drive.files.list({
    q: `'${params.id}' in parents`,
    pageSize: 10,
    fields: "files(id, name, webViewLink, webContentLink)",
  });

  const files = driveResponse.data.files as GoogleDriveFile[];

  const groupByExtension = files?.reduce((acc: FileGroup, file) => {
    if (!file) return acc;
    const extension = file?.name?.split(".")?.pop()?.toLowerCase() || "";

    if (!acc[extension]) {
      acc[extension] = [];
    }

    acc[extension].push(file);
    return acc;
  }, {});

  console.log(driveResponse.data.files);
  return (
    <main className="container flex flex-col">
      {/* <pre>{JSON.stringify(groupByExtension, null, 2)}</pre> */}
      {groupByExtension?.pdf?.length > 0 && (
        <PdfDisplay pdfFiles={groupByExtension.pdf} />
      )}{" "}
    </main>
  );
}
