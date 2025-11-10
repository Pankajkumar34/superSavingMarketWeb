"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const hideFooter = pathname === "/login" || pathname === "/signin";

  return !hideFooter ? <>{children}</> : null;
};

export default Wrapper;
