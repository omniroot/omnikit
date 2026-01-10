import { chakra } from "@chakra-ui/react";

const KaizenCardRoot = chakra("div", {
	className: "kaizen-card",
	base: {
		w: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "3",
		bg: "surface-container",
		borderRadius: "2xl",
		py: 3,
		paddingInline: "3",
	},
});

const KaizenCardHeader = chakra("div", {
	className: "kaizen-card-header",
	base: {
		w: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "0",
	},
});

const KaizenCardBody = chakra("div", {
	className: "kaizen-card-body",
	base: {
		w: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		gap: "1",
	},
});

const KaizenCardFooter = chakra("div", {
	className: "kaizen-card-footer",
	base: {
		w: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "1",
	},
});

const KaizenCardTitle = chakra("span", {
	className: "kaizen-card-title",
	base: {
		w: "100%",
		color: "primary",
		fontWeight: "bold",
		fontSize: "lg",
	},
});

const KaizenCardDescription = chakra("span", {
	className: "kaizen-card-description",
	base: {
		w: "100%",
		color: "on-surface",
		fontWeight: "medium",
		fontSize: "md",
	},
});

export const KaizenCard = {
	Root: KaizenCardRoot,
	Header: KaizenCardHeader,
	Body: KaizenCardBody,
	Footer: KaizenCardFooter,
	Title: KaizenCardTitle,
	Description: KaizenCardDescription,
};
