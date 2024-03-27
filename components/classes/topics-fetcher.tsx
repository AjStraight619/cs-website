import { TopicsType } from "@/lib/types";
import { google } from "googleapis";
import React from "react";
import { Topics } from "./topics";

const TopicsFetcher = async () => {
  const folderId = "1c6FZ7t5MUjFi8jiicgh1_mRd9XqkcZ8k";

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
    q: `'${folderId}' in parents`,
    pageSize: 10,
    fields: "files(id, name)",
  });

  const topics = driveResponse.data.files as TopicsType[];
  return <Topics topics={topics} />;
};

export default TopicsFetcher;
