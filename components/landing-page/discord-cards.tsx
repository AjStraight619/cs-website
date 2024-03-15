import { discordOptions } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DiscordCards = () => {
  return (
    <div className="w-full flex items-center bg-salmon-1 rounded-md p-4">
      <ul className="flex flex-row items-center justify-between gap-2 w-full">
        {discordOptions.map((option, index) => (
          <li key={index}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-indigo-400">{option.icon}</span>
                  <span className="text-sm">{option.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscordCards;
