import React from "react";
import { ToggleTheme } from "@/components/ToggleMode";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container fixed left-1/2 -translate-x-1/2 transfor w-[90%] flex items-center justify-between px-5 mx-auto mt-5 rounded-md bg-blue-100 dark:bg-background h-16 shadow-lg z-10 backdrop-blur-sm bg-opacity-50">
      <div>
        <Image
          width={45}
          height={45}
          className="rounded-md"
          src="/abhabhijayrajvanshdotcom_logo.jpeg"
          alt="uptut-logo"
        />
      </div>
      <div className="flex items-center gap-5">
        {/* <ToggleTheme /> */}
        <Button size={"default"} className="text-md font-semibold text-white dark:text-black">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
