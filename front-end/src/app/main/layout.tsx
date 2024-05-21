import React from "react";

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full flex">{children}</div>;
};

export default MainPageLayout;
