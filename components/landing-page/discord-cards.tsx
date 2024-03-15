"use client";

import { discordOptions } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const DiscordCards = () => {
  return (
    <div className="flex flex-col items-center bg-salmon-1 rounded-md p-4">
      <motion.ul className="flex flex-row items-center justify-between gap-2 w-full">
        {discordOptions.map((option, index) => (
          <motion.li key={index}>
            <Card className="h-[16rem]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-indigo-400">{option.icon}</span>
                  <span className="text-sm">{option.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DiscordCards;
