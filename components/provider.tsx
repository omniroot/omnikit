"use client";

import omnikit from "@/theme/index.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function OmnikitProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={omnikit}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
