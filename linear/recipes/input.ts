import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
	className: "chakra-input",
	base: {
		width: "100%",
		minWidth: "0",
		outline: "0",
		position: "relative",
		appearance: "none",
		textAlign: "start",
		borderRadius: "md",
		_disabled: {
			layerStyle: "disabled",
		},
		height: "var(--input-height)",
		minW: "var(--input-height)",
		transition: "border-color 200ms, focus-ring 200ms",
		"--focus-color": "colors.colorPalette.focusRing",
		_placeholder: {
			color: "subtext2",
		},
		"--error-color": "colors.border.error",
		_invalid: {
			focusRingColor: "var(--error-color)",
			borderColor: "var(--error-color)",
		},
	},
	variants: {
		size: {
			"2xs": {
				textStyle: "xs",
				px: "2",
				"--input-height": "sizes.7",
			},
			xs: {
				textStyle: "xs",
				px: "2",
				"--input-height": "sizes.8",
			},
			sm: {
				textStyle: "sm",
				px: "2.5",
				"--input-height": "sizes.9",
			},
			md: {
				textStyle: "sm",
				px: "3",
				"--input-height": "sizes.10",
			},
			lg: {
				textStyle: "md",
				px: "4",
				"--input-height": "sizes.11",
			},
			xl: {
				textStyle: "md",
				px: "4.5",
				"--input-height": "sizes.12",
			},
			"2xl": {
				textStyle: "lg",
				px: "5",
				"--input-height": "sizes.16",
			},
		},
		variant: {
			outline: {
				bg: "transparent",
				borderWidth: "1px",
				borderColor: "outline",
				focusVisibleRing: "inside",
				focusRingColor: "{colors.outline_variant}",
			},
			subtle: {
				borderWidth: "1px",
				borderColor: "transparent",
				bg: "bg.muted",
				focusVisibleRing: "inside",
				focusRingColor: "{colors.outline_variant}",
			},
			flushed: {
				bg: "transparent",
				borderBottomWidth: "1px",
				borderBottomColor: "outline",
				borderRadius: "0",
				px: "0",
				_focusVisible: {
					borderColor: "{colors.outline_variant}",
					boxShadow: "0px 1px 0px 0px {colors.outline_variant}",
					_invalid: {
						borderColor: "var(--error-color)",
						boxShadow: "0px 1px 0px 0px var(--error-color)",
					},
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "outline",
	},
});
