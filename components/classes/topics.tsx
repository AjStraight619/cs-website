"use client";

import { Separator } from "../ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TopicsType } from "@/lib/types";
import { liVariants, ulVariants } from "@/lib/data";

export type TopicsProps = {
  topics: TopicsType[];
};

export const Topics = ({ topics }: TopicsProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-start w-48">
      <h1 className="font-semibold text-3xl">Topics</h1>
      <Separator className="mb-8 mt-2" />
      <motion.ul
        initial="hidden"
        animate="show"
        variants={ulVariants}
        className="flex flex-col items-start gap-y-6"
      >
        {topics.map((link, index) => (
          <motion.li variants={liVariants} key={index} className="gap-y-4">
            <Link
              className="opacity-60 hover:opacity-100 transition-colors duration-150"
              href={`${pathname}/${link.id}`}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
