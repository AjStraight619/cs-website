"use client";

import Link from "next/link";
import SearchBar from "../search/search";
import SearchDialog from "../search/search-dialog";
import { ModeToggle } from "../ui/theme-toggle";
import { liVariants, navLinks, ulVariants } from "@/lib/data";
import { usePathname } from "next/navigation";
import BackButton from "../ui/back-button";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = {
  hidden: {
    y: "-100vh", // Start above the screen
    opacity: 0,
  },
  show: {
    y: 0, // End at its original position
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    y: "-100vh", // Exit to above the screen
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

export const Nav = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 640) {
          setIsMenuOpen(false);
        }
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full h-16 border-b border-muted-foreground backdrop-blur-lg z-[999] font-poppins">
        <div className="md:container md:max-w-4xl flex items-center w-full h-full">
          <div className="flex items-center justify-between w-full">
            <div className="hidden sm:block">
              <ul className="flex items-center">
                {navLinks.map((link, index) => (
                  <li key={index} className="space-x-2">
                    <Link
                      className={`ml-2 opacity-50 hover:opacity-100 ${
                        pathname === link.href ? "underline opacity-100" : ""
                      }`}
                      key={index}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:hidden block">
              <Button
                size="icon"
                variant="outline"
                className="z-[999] ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="z-[999]" />
              </Button>
            </div>

            <div className="flex items-center gap-x-4 mr-2 md:mr-0">
              <SearchDialog />
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="h-full w-screen bg-background z-[50] fixed"
            variants={navVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.ul
              animate="show"
              initial="hidden"
              variants={ulVariants}
              className="h-full flex flex-col items-center justify-evenly"
            >
              {navLinks.map((link, index) => (
                <motion.li variants={liVariants} key={index}>
                  <Link className="text-secondary-foreground" href={link.href}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
