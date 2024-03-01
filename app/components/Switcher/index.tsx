"use client";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "@/app/utils/darkmodeSwitch";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false,
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 40,
  };

  return (
    <>
      <motion.div
        layout
        className={twMerge(
          "flex w-14 transform flex-row rounded-full bg-secondary p-1 shadow-md drop-shadow-md transition-all duration-300 ease-out dark:flex-row-reverse dark:bg-white",
        )}
      >
        <motion.div
          layout
          transition={spring}
          className="dark:bg-asphalt w-fit rounded-full bg-white p-1"
        >
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={18}
            sunColor="#FAC213"
            moonColor="white"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
