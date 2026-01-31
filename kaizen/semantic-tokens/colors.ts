import { defineSemanticTokens } from "@chakra-ui/react";

export const colors = defineSemanticTokens.colors({
	primary: {
		value: {
			_light: "#F8BB71",
			_dark: "#F8BB71",
		},
	},
	"on-primary": {
		value: {
			_light: "#3A2400",
			_dark: "#4A2D00",
		},
	},
	"primary-container": {
		value: {
			_light: "#FFE3C6",
			_dark: "#6A3F00",
		},
	},
	"on-primary-container": {
		value: {
			_light: "#2A1800",
			_dark: "#FFE1BC",
		},
	},
	"primary-hover": {
		value: {
			_light: "#F6A95A",
			_dark: "#FFCB8F",
		},
	},
	"primary-focus": {
		value: {
			_light: "rgba(248,187,113,0.16)",
			_dark: "rgba(248,187,113,0.12)",
		},
	},
	"primary-pressed": {
		value: {
			_light: "#D98A3F",
			_dark: "#8B4B00",
		},
	},

	secondary: {
		value: {
			_light: "#8A6B4F",
			_dark: "#D6C2B3",
		},
	},
	"on-secondary": {
		value: {
			_light: "{colors.white}",
			_dark: "#3B2C21",
		},
	},
	"secondary-container": {
		value: {
			_light: "#F3E1D3",
			_dark: "#524034",
		},
	},
	"on-secondary-container": {
		value: {
			_light: "#2E1F13",
			_dark: "#F3E1D3",
		},
	},
	"secondary-hover": {
		value: {
			_light: "#7A5C45",
			_dark: "#C3B0A0",
		},
	},
	"secondary-pressed": {
		value: {
			_light: "#6B4E38",
			_dark: "#A08C7B",
		},
	},

	tertiary: {
		value: {
			_light: "#4F6F52",
			_dark: "#B8D0B9",
		},
	},
	"on-tertiary": {
		value: {
			_light: "{colors.white}",
			_dark: "#223527",
		},
	},
	"tertiary-container": {
		value: {
			_light: "#D4E8D5",
			_dark: "#384B3C",
		},
	},
	"on-tertiary-container": {
		value: {
			_light: "#102016",
			_dark: "#D4E8D5",
		},
	},
	"tertiary-hover": {
		value: {
			_light: "#446048",
			_dark: "#A6C1A7",
		},
	},
	"tertiary-pressed": {
		value: {
			_light: "#375337",
			_dark: "#7B946F",
		},
	},
	background: {
		value: {
			_light: "#FFF8F2",
			_dark: "#16130F",
		},
	},
	"on-background": {
		value: {
			_light: "#1F1B16",
			_dark: "#EAE1D9",
		},
	},

	surface: {
		value: {
			_light: "#FFF8F2",
			_dark: "#16130F",
		},
	},
	"surface-container-low": {
		value: {
			_light: "#F9F1E8",
			_dark: "#0C0A09",
		},
	},
	"surface-container": {
		value: {
			_light: "#F3EBE2",
			_dark: "#211D19",
		},
	},
	"surface-container-high": {
		value: {
			_light: "#EDE5DC",
			_dark: "#2B2621",
		},
	},
	"surface-container-highest": {
		value: {
			_light: "#EDE5DC",
			_dark: "#41382F",
		},
	},
	"surface-hover": {
		value: {
			_light: "#FFF2E0",
			_dark: "#1C1510",
		},
	},
	"surface-pressed": {
		value: {
			_light: "#F0E4D6",
			_dark: "#231C17",
		},
	},

	"on-surface": {
		value: {
			_light: "#1F1B16",
			_dark: "#EAE1D9",
		},
	},
	"on-surface-dark": {
		value: {
			_light: "#0F0D0A",
			_dark: "#CFC4B8",
		},
	},
	"on-surface-darkest": {
		value: {
			_light: "#050403",
			_dark: "#A89B8D",
		},
	},

	outline: {
		value: {
			_light: "#D2C6BA",
			_dark: "#54443A",
		},
	},
	"outline-variant": {
		value: {
			_light: "#BEB0A3",
			_dark: "#2B2621",
		},
	},

	error: {
		value: {
			_light: "#BA1A1A",
			_dark: "#FFB4AB",
		},
	},
	"on-error": {
		value: {
			_light: "{colors.white}",
			_dark: "#690005",
		},
	},
	"error-container": {
		value: {
			_light: "#FFDAD6",
			_dark: "#93000A",
		},
	},
	"on-error-container": {
		value: {
			_light: "#410002",
			_dark: "#FFDAD6",
		},
	},

	border: {
		value: {
			_light: "#211D19",
			_dark: "{colors.surface-container-highest}",
		},
	},

	"anim-accent": {
		value: {
			_light: "#E55153",
			_dark: "#E55153",
		},
	},
	"anim-accent-opaque": {
		value: {
			_light: "rgba(229,81,83,0.12)",
			_dark: "rgba(229,81,83,0.18)",
		},
	},
	// outline: {
	// 	value: {
	// 		_light: "{colors.white}",
	// 		_dark: "#54443A",
	// 	},
	// },
	bg: {
		DEFAULT: {
			value: {
				_light: "{colors.white}",
				_dark: "{colors.black}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.gray.50}",
				_dark: "{colors.gray.950}",
			},
		},
		muted: {
			value: {
				_light: "{colors.gray.100}",
				_dark: "{colors.gray.900}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.gray.200}",
				_dark: "{colors.gray.800}",
			},
		},
		inverted: {
			value: {
				_light: "{colors.black}",
				_dark: "{colors.white}",
			},
		},
		panel: {
			value: {
				_light: "{colors.white}",
				_dark: "{colors.gray.950}",
			},
		},
		error: {
			value: {
				_light: "{colors.red.50}",
				_dark: "{colors.red.950}",
			},
		},
		warning: {
			value: {
				_light: "{colors.orange.50}",
				_dark: "{colors.orange.950}",
			},
		},
		success: {
			value: {
				_light: "{colors.green.50}",
				_dark: "{colors.green.950}",
			},
		},
		info: {
			value: {
				_light: "{colors.blue.50}",
				_dark: "{colors.blue.950}",
			},
		},
	},
	fg: {
		DEFAULT: {
			value: {
				_light: "{colors.black}",
				_dark: "{colors.gray.50}",
			},
		},
		muted: {
			value: {
				_light: "{colors.gray.600}",
				_dark: "{colors.gray.400}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.gray.400}",
				_dark: "{colors.gray.500}",
			},
		},
		inverted: {
			value: {
				_light: "{colors.gray.50}",
				_dark: "{colors.black}",
			},
		},
		error: {
			value: {
				_light: "{colors.red.500}",
				_dark: "{colors.red.400}",
			},
		},
		warning: {
			value: {
				_light: "{colors.orange.600}",
				_dark: "{colors.orange.300}",
			},
		},
		success: {
			value: {
				_light: "{colors.green.600}",
				_dark: "{colors.green.300}",
			},
		},
		info: {
			value: {
				_light: "{colors.blue.600}",
				_dark: "{colors.blue.300}",
			},
		},
	},
	// border: {
	// 	DEFAULT: {
	// 		value: {
	// 			_light: "{colors.gray.200}",
	// 			_dark: "{colors.gray.800}",
	// 		},
	// 	},
	// 	muted: {
	// 		value: {
	// 			_light: "{colors.gray.100}",
	// 			_dark: "{colors.gray.900}",
	// 		},
	// 	},
	// 	subtle: {
	// 		value: {
	// 			_light: "{colors.gray.50}",
	// 			_dark: "{colors.gray.950}",
	// 		},
	// 	},
	// 	emphasized: {
	// 		value: {
	// 			_light: "{colors.gray.300}",
	// 			_dark: "{colors.gray.700}",
	// 		},
	// 	},
	// 	inverted: {
	// 		value: {
	// 			_light: "{colors.gray.800}",
	// 			_dark: "{colors.gray.200}",
	// 		},
	// 	},
	// 	error: {
	// 		value: {
	// 			_light: "{colors.red.500}",
	// 			_dark: "{colors.red.400}",
	// 		},
	// 	},
	// 	warning: {
	// 		value: {
	// 			_light: "{colors.orange.500}",
	// 			_dark: "{colors.orange.400}",
	// 		},
	// 	},
	// 	success: {
	// 		value: {
	// 			_light: "{colors.green.500}",
	// 			_dark: "{colors.green.400}",
	// 		},
	// 	},
	// 	info: {
	// 		value: {
	// 			_light: "{colors.blue.500}",
	// 			_dark: "{colors.blue.400}",
	// 		},
	// 	},
	// },
	gray: {
		contrast: {
			value: {
				_light: "{colors.white}",
				_dark: "{colors.black}",
			},
		},
		fg: {
			value: {
				_light: "{colors.gray.800}",
				_dark: "{colors.gray.200}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.gray.100}",
				_dark: "{colors.gray.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.gray.200}",
				_dark: "{colors.gray.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.gray.300}",
				_dark: "{colors.gray.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.gray.900}",
				_dark: "{colors.white}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.gray.400}",
				_dark: "{colors.gray.400}",
			},
		},
		border: {
			value: {
				_light: "{colors.gray.200}",
				_dark: "{colors.gray.800}",
			},
		},
	},
	red: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.red.700}",
				_dark: "{colors.red.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.red.100}",
				_dark: "{colors.red.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.red.200}",
				_dark: "{colors.red.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.red.300}",
				_dark: "{colors.red.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.red.600}",
				_dark: "{colors.red.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.red.500}",
				_dark: "{colors.red.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.red.500}",
				_dark: "{colors.red.400}",
			},
		},
	},
	orange: {
		contrast: {
			value: {
				_light: "white",
				_dark: "black",
			},
		},
		fg: {
			value: {
				_light: "{colors.orange.700}",
				_dark: "{colors.orange.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.orange.100}",
				_dark: "{colors.orange.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.orange.200}",
				_dark: "{colors.orange.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.orange.300}",
				_dark: "{colors.orange.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.orange.600}",
				_dark: "{colors.orange.500}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.orange.500}",
				_dark: "{colors.orange.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.orange.500}",
				_dark: "{colors.orange.400}",
			},
		},
	},
	green: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.green.700}",
				_dark: "{colors.green.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.green.100}",
				_dark: "{colors.green.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.green.200}",
				_dark: "{colors.green.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.green.300}",
				_dark: "{colors.green.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.green.600}",
				_dark: "{colors.green.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.green.500}",
				_dark: "{colors.green.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.green.500}",
				_dark: "{colors.green.400}",
			},
		},
	},
	blue: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.blue.700}",
				_dark: "{colors.blue.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.blue.100}",
				_dark: "{colors.blue.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.blue.200}",
				_dark: "{colors.blue.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.blue.300}",
				_dark: "{colors.blue.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.blue.600}",
				_dark: "{colors.blue.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.blue.500}",
				_dark: "{colors.blue.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.blue.500}",
				_dark: "{colors.blue.400}",
			},
		},
	},
	yellow: {
		contrast: {
			value: {
				_light: "black",
				_dark: "black",
			},
		},
		fg: {
			value: {
				_light: "{colors.yellow.800}",
				_dark: "{colors.yellow.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.yellow.100}",
				_dark: "{colors.yellow.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.yellow.200}",
				_dark: "{colors.yellow.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.yellow.300}",
				_dark: "{colors.yellow.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.yellow.300}",
				_dark: "{colors.yellow.300}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.yellow.500}",
				_dark: "{colors.yellow.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.yellow.500}",
				_dark: "{colors.yellow.500}",
			},
		},
	},
	teal: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.teal.700}",
				_dark: "{colors.teal.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.teal.100}",
				_dark: "{colors.teal.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.teal.200}",
				_dark: "{colors.teal.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.teal.300}",
				_dark: "{colors.teal.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.teal.600}",
				_dark: "{colors.teal.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.teal.500}",
				_dark: "{colors.teal.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.teal.500}",
				_dark: "{colors.teal.400}",
			},
		},
	},
	purple: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.purple.700}",
				_dark: "{colors.purple.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.purple.100}",
				_dark: "{colors.purple.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.purple.200}",
				_dark: "{colors.purple.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.purple.300}",
				_dark: "{colors.purple.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.purple.600}",
				_dark: "{colors.purple.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.purple.500}",
				_dark: "{colors.purple.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.purple.500}",
				_dark: "{colors.purple.400}",
			},
		},
	},
	pink: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.pink.700}",
				_dark: "{colors.pink.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.pink.100}",
				_dark: "{colors.pink.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.pink.200}",
				_dark: "{colors.pink.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.pink.300}",
				_dark: "{colors.pink.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.pink.600}",
				_dark: "{colors.pink.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.pink.500}",
				_dark: "{colors.pink.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.pink.500}",
				_dark: "{colors.pink.400}",
			},
		},
	},
	cyan: {
		contrast: {
			value: {
				_light: "white",
				_dark: "white",
			},
		},
		fg: {
			value: {
				_light: "{colors.cyan.700}",
				_dark: "{colors.cyan.300}",
			},
		},
		subtle: {
			value: {
				_light: "{colors.cyan.100}",
				_dark: "{colors.cyan.900}",
			},
		},
		muted: {
			value: {
				_light: "{colors.cyan.200}",
				_dark: "{colors.cyan.800}",
			},
		},
		emphasized: {
			value: {
				_light: "{colors.cyan.300}",
				_dark: "{colors.cyan.700}",
			},
		},
		solid: {
			value: {
				_light: "{colors.cyan.600}",
				_dark: "{colors.cyan.600}",
			},
		},
		focusRing: {
			value: {
				_light: "{colors.cyan.500}",
				_dark: "{colors.cyan.500}",
			},
		},
		border: {
			value: {
				_light: "{colors.cyan.500}",
				_dark: "{colors.cyan.400}",
			},
		},
	},
});
