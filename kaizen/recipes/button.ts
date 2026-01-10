import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
	className: "chakra-button",
	base: {
		display: "inline-flex",
		appearance: "none",
		alignItems: "center",
		justifyContent: "center",
		userSelect: "none",
		position: "relative",
		borderRadius: "l2",
		whiteSpace: "nowrap",
		verticalAlign: "middle",
		borderWidth: "1px",
		borderColor: "transparent",
		cursor: "button",
		flexShrink: "0",
		outline: "0",
		lineHeight: "1.2",
		isolation: "isolate",
		fontWeight: "medium",
		transitionProperty: "common",
		transitionDuration: "moderate",
		focusVisibleRing: "outside",
		_disabled: {
			layerStyle: "disabled",
		},
		_icon: {
			flexShrink: "0",
		},
	},
	variants: {
		size: {
			"2xs": {
				h: "6",
				minW: "6",
				textStyle: "xs",
				px: "2",
				gap: "1",
				_icon: {
					width: "3.5",
					height: "3.5",
				},
			},
			xs: {
				h: "8",
				minW: "8",
				textStyle: "xs",
				px: "2.5",
				gap: "1",
				_icon: {
					width: "4",
					height: "4",
				},
			},
			sm: {
				h: "9",
				minW: "9",
				px: "3.5",
				textStyle: "sm",
				gap: "2",
				_icon: {
					width: "4",
					height: "4",
				},
			},
			md: {
				h: "10",
				minW: "10",
				textStyle: "sm",
				px: "4",
				gap: "2",
				_icon: {
					width: "5",
					height: "5",
				},
			},
			lg: {
				h: "11",
				minW: "11",
				textStyle: "md",
				px: "5",
				gap: "3",
				_icon: {
					width: "5",
					height: "5",
				},
			},
			xl: {
				h: "12",
				minW: "12",
				textStyle: "md",
				px: "5",
				gap: "2.5",
				_icon: {
					width: "5",
					height: "5",
				},
			},
			"2xl": {
				h: "16",
				minW: "16",
				textStyle: "lg",
				px: "7",
				gap: "3",
				_icon: {
					width: "6",
					height: "6",
				},
			},
		},
		variant: {
			primary: {
				bg: "primary",
				color: "on-primary",
				borderColor: "transparent",
				_hover: { bg: "primary-hover" },
				_active: { bg: "primary-pressed" },
				_focusVisible: { boxShadow: "0 0 0 4px primary-focus" },
			},
			secondary: {
				bg: "secondary",
				color: "on-secondary",
				borderColor: "transparent",
				_hover: { bg: "secondary-hover" },
				_active: { bg: "secondary-pressed" },
				_focusVisible: { boxShadow: "0 0 0 4px rgba(0,0,0,0.06)" },
			},

			/* tertiary — accent/positive-ish controls (например success) */
			tertiary: {
				bg: "tertiary",
				color: "on-tertiary",
				borderColor: "transparent",
				_hover: { bg: "tertiary-hover" },
				_active: { bg: "tertiary-pressed" },
			},
			surface: {
				bg: "surface-container",
				color: "on-surface",
				borderColor: "transparent",
				shadow: "0 0 0px 1px {colors.surface}" /* subtle visual separator */,
				_hover: { bg: "surface-hover" },
				_active: { bg: "surface-pressed" },
			},

			/* outline — обводка, использует outline tokens */
			outline: {
				bg: "transparent",
				color: "on-surface",
				borderWidth: "1px",
				borderColor: "outline",
				_hover: { bg: "surface-container-highest", borderColor: "outline-variant" },
				_active: { bg: "surface-pressed" },
				_focusVisible: { boxShadow: "0 0 0 3px {colors.primary-focus}" },
			},
			ghost: {
				bg: "transparent",
				color: "on-surface",
				borderColor: "transparent",
				_hover: { bg: "surface-container-highest" },
				_active: { bg: "surface-pressed" },
			},

			/* plain — текстовая кнопка без фоновой заливки */
			plain: {
				bg: "transparent",
				color: "on-surface",
				borderColor: "transparent",
				_hover: { textDecoration: "underline" },
			},
			accent: {
				bg: "transparent",
				color: "on-surface",
				borderWidth: "1px",
				borderColor: "transparent",
				_hover: {
					boxShadow: "0 6px 18px {colors.anim-accent-opaque}",
					transform: "translateY(-1px)",
				},
				_active: { transform: "translateY(0)" },
				_before: {
					content: '""',
					position: "absolute",
					inset: 0,
					borderRadius: "inherit",
					pointerEvents: "none",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
