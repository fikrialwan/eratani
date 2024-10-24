import React, { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
