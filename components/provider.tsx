"use client";

import omnikit, { themes } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import "./provider.css";
import { useState } from "react";

export function OmnikitProvider(props: ColorModeProviderProps) {
  const [theme, setTheme] = useState("linear");

  return (
    // @ts-ignore
    <ChakraProvider value={themes[theme]}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
