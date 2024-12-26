import React from "react";
import { ToggleTheme } from "@/components/ToggleMode";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto p-2 flex items-center justify-between px-5">
      <div className="p-2 rounded-md">
        Logo.
      </div>
      <div className="bpurple py-1 px-2 rounded-md">
        toggle ai
      </div>
    </header>
  );
};

export default Header;
