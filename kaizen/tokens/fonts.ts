import { defineTokens } from "@chakra-ui/react";

export const fonts = defineTokens.fonts({
	heading: {
		value:
			'Kaizen-Heading, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
	body: {
		value:
			'Kaizen-Body, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
	mono: {
		value:
			'Kaizen-Body, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
	},
});
