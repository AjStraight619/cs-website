import React from "react";
import { FaDiscord, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export const classOptions = [
  {
    name: "Java",
    icon: React.createElement(FaJava, { size: "2em" }),
    href: "/java",
  },
  {
    name: "C++",
    icon: React.createElement(SiCplusplus, { size: "2em" }),
    href: "/cpp",
  },
];

export const discordOptions = [
  {
    name: "CS 210-section 1",
    href: "https://discord.gg/CS210",
    icon: React.createElement(FaDiscord, { size: "2em" }),
  },
  {
    name: "CS 210-section 1",
    href: "https://discord.gg/CS210",
    icon: React.createElement(FaDiscord, { size: "2em" }),
  },
  {
    name: "CS 210-section 1",
    href: "https://discord.gg/CS210",
    icon: React.createElement(FaDiscord, { size: "2em" }),
  },
];

export const people = [
  {
    name: "Manju",
    position: "Instructor",
    image: "/headshot.svg",
  },
  {
    name: "Lokesh",
    position: "TA",
    image: "",
  },
  {
    name: "Jaydeep",
    position: "TA",
    image: "",
  },
];

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Syllabus",
    href: "/syllabus",
  },
  {
    label: "GradeCalc",
    href: "/grade-calculator",
  },
];

export const cppTopicLinks = [
  {
    id: "1SGbvlXdCXVSyO1DMaBTA9HCudO0NLD9p",
    name: "Linked Lists, Stacks & Queues",
  },
  { id: "1eW9qEb50Vyp-h8bm1uS-P2gAY8AV7y1i", name: "Recursion" },
  { id: "1YNvrGpPZ6HkMqwwKikzjt0PLLr7W8q3K", name: "Sorting" },
  { id: "1t0IiAYoG_2NPJGR9Diz4pGqNa61RNpla", name: "Hashtables" },
  { id: "1KDqgM3qeXxU4yUAjwYfdLbFLT4-vnTAW", name: "Graphs" },
  { id: "1e4DcT-BRsoxs5mMbVwXqaeaSh6wS7MrM", name: "Trees" },
  {
    id: "1w8zzV0lOLwuGhbAkooROtmRr7a9fxZQV",
    name: "Priority Queues & Heaps",
  },
  {
    id: "1_fKkMpWOxmaCHGbfgU_2bM2oBNzCfydX",
    name: "Analysis Of algorithms",
  },
  { id: "1EPJSfTaOROllsDtvrgN4WJCpw_mzTEtO", name: "Resources" },
];
