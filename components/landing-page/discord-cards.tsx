"use client";

import { discordOptions } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { SectionDivider } from "./section-divider";

const DiscordCards = () => {
  return (
    <div className="flex flex-col items-center rounded-md">
      <SectionDivider>What are we discussing this week?</SectionDivider>
      <motion.ul className="flex md:flex-row flex-col items-center justify-between gap-2 w-full">
        {discordOptions.map((option, index) => (
          <motion.li key={index}>
            <Card className="">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="">{option.icon}</span>
                  <span className="text-sm">{option.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="my-6"></div>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DiscordCards;
