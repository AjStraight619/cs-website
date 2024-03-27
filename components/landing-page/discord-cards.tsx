"use client";

import { discordOptions } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { SectionDivider } from "./section-divider";

const discordIframes = [
  {
    name: "Section 1",
    src: "https://discord.com/widget?id=1183649805415743528&theme=dark",
  },
  {
    name: "Section 2",
    src: "https://discord.com/widget?id=1183649706065276948&theme=dark",
  },
  {
    name: "Section 3",
    src: "https://discord.com/widget?id=1183649881026461747&theme=dark",
  },
];

const DiscordCards = () => {
  return (
    <div className="">
      <SectionDivider>What are we discussing this week?</SectionDivider>
      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {discordIframes.map((option, index) => (
          <motion.li key={index}>
            <p className="mb-1 font-poppins text-secondary-foreground">
              {option.name}
            </p>
            <iframe
              height="400"
              allowTransparency={true}
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              src={option.src}
            ></iframe>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DiscordCards;
