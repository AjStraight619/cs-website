"use client";

import { classOptions } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ClassCards = () => {
  return (
    <motion.ul className="flex flex-row justify-center gap-4 w-full">
      {classOptions.map((option, index) => (
        <motion.li className="w-full" key={index}>
          <Link href={option.href}>
            <Card className="group transition-all cursor-pointer hover:scale-105 shadow-sm flex items-center justify-center pt-4">
              <CardContent className="flex gap-2 items-center justify-center">
                <span>{option.icon}</span>
                <span className="font-semibold text-lg">{option.name}</span>
                <span className="group-hover:translate-x-2 duration-300">
                  <ArrowRight />
                </span>
              </CardContent>
            </Card>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ClassCards;
