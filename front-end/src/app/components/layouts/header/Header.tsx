import React from "react";

export default function Header() {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <div className="py-4 text-center">Clothing-management-system</div>
        <img
          src="/clothing-logo.svg"
          alt="clothing-logo"
          className=" w-16 h-16"
        />
      </div>
    </header>
  );
}
