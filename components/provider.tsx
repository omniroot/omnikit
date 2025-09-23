"use client";

import { themes } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import "./provider.css";

export function OmnikitProvider(props: ColorModeProviderProps) {
  const [theme] = useState("linear");

  return (
    // @ts-ignore
    <ChakraProvider value={themes[theme]}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
