import Header from "@/components/main/header";
import React from "react";

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Header />
      {children}
    </div>
  );
};

export default MainPageLayout;
