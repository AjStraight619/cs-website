"use client";

import Link from "next/link";
import SearchBar from "../search/search";
import SearchDialog from "../search/search-dialog";
import { ModeToggle } from "../ui/theme-toggle";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import BackButton from "../ui/back-button";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 w-full h-16 border-b border-muted-foreground backdrop-blur-lg">
      <div className="container max-w-4xl flex items-center w-full h-full">
        <div className="flex items-center justify-between w-full">
          <div>
            <BackButton />
          </div>
          <ul className="flex items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="space-x-2">
                <Link
                  className={`ml-2 opacity-70 hover:opacity-100 ${
                    pathname === link.href ? "underline" : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <SearchDialog />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
