"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { themes } from "@/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import "./provider.css";
import { Toaster } from "@/theme/components/toaster.tsx";

interface IOmnikitProvider extends ColorModeProviderProps {
	theme?: "kaizen";
}

export function OmnikitProvider({ theme = "kaizen", ...props }: IOmnikitProvider) {
	const [selectedTheme] = useState(theme);

	return (
		<ChakraProvider value={themes[selectedTheme]}>
			<ColorModeProvider {...props} />
			<Toaster />
		</ChakraProvider>
	);
}
