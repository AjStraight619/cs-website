import { google } from "googleapis";

export async function GET() {
  console.log("In get request");
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
    pageSize: 10,
    fields: "files(id, name)",
  });

  return Response.json({ data: driveResponse.data.files });
}
