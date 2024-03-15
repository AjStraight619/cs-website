import { google } from "googleapis";
import { NextResponse } from "next/server";

const baseUrl = "https://www.googleapis.com";

const base64Credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS!;
// Decode the base64 string to get the JSON string
const jsonCredentials = Buffer.from(base64Credentials, "base64").toString(
  "utf-8"
);
// Parse the JSON string to get the credentials object
const credentials = JSON.parse(jsonCredentials);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const folderId = "1j5S7C8Uy5scRpNZyRZ8Ugah_XT7Elqsa";

export async function GET() {
  console.log("in get request");
  try {
    const drive = google.drive({ version: "v3", auth: auth });
    const response = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: "files(id, name, mimeType, webViewLink)",
    });

    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from Google Drive:", error);
    return NextResponse.json({
      error: "Error fetching data from Google Drive",
    });
  }
}
