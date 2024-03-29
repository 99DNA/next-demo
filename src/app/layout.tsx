import React from "react";
import { config } from "@/config";
import { ContextProvider } from "@/context";
import { Metadata } from "next";
import { headers } from "next/headers";
import StyledComponentsRegistry from "../lib/AntdRegistry";

import "../styles/globals.css";
import { cookieToInitialState } from "wagmi";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body>
        <ContextProvider initialState={initialState}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
