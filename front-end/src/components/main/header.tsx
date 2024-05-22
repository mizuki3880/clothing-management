import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const Header = () => {
  return (
    <div className="flex justify-between bg-white">
      <div className="m-5 h-16 w-16 flex items-center">
        <img src="/dressdirect_logo.png" alt="dressdirect" />
        DressDirect
      </div>
      <Avatar className=" m-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
