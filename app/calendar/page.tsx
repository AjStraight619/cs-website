"use client";

import { useTheme } from "next-themes";

export default function CalendarPage() {
  const { theme } = useTheme();
  return (
    <main className="flex flex-col items-center justify-center pt-16 h-full">
      <iframe
        className={`${theme === "dark" ? "invert" : ""} `}
        src="https://calendar.google.com/calendar/embed?src=mmuralidharanpriya%40sdsu.edu&ctz=America%2FLos_Angeles"
        width="1000"
        height="800"
      ></iframe>
    </main>
  );
}