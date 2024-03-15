"use client";

import { classOptions } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";

const ClassCards = () => {
  return (
    <div className="w-full">
      <motion.ul className="flex flex-row justify-center gap-4 w-full">
        {classOptions.map((option, index) => (
          <motion.li className="w-full" key={index}>
            <Card className="group transition-all cursor-pointer hover:scale-105 shadow-sm bg-mustard-1 flex items-center justify-center pt-4">
              {/* <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader> */}
              <CardContent className="flex gap-2 items-center justify-center">
                <span>{option.icon}</span>
                <span className="font-semibold text-lg">{option.name}</span>
                <span className="group-hover:translate-x-2 duration-300">
                  <ArrowRight />
                </span>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ClassCards;
