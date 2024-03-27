const getDiscordData = async () => {
  try {
    const res = await fetch(
      "https://discord.com/api/guilds/503742042481098775/widget.json",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch discord data");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function TestPage() {
  const discordData = await getDiscordData();

  console.log(JSON.stringify(discordData, null, 2));

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div>
        <iframe
          src="https://discord.com/widget?id=503742042481098775&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </main>
  );
}
