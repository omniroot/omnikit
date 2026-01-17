import "@m3e/loading-indicator";
import type { FC } from "react";

// https://github.com/matraic/m3e/blob/main/packages/loading-indicator/README.md

// --m3e-loading-indicator-active-indicator-color	Uncontained active indicator color.
// --m3e-loading-indicator-contained-active-indicator-color	Contained active indicator color.
// --m3e-loading-indicator-contained-container-color	Contained container (background) color.
// --m3e-loading-indicator-active-indicator-size	Size of the active indicator.
// --m3e-loading-indicator-container-shape	Container shape.
// --m3e-loading-indicator-container-size	Container size.

interface KaizenLoader {
	size?: number;
	variant?: "uncontained" | "contained";
	loading?: boolean;
}
export const KaizenLoader: FC<KaizenLoader> = ({
	size = 48,
	variant = "uncontained",
	loading = true,
}) => {
	if (!loading) return null;
	return (
		// @ts-expect-error m3e-loading-indicator
		<m3e-loading-indicator
			variant={variant}
			style={{
				"--m3e-loading-indicator-container-size": `${size}px`,
				"--m3e-loading-indicator-active-indicator-size": `${size - 10}px`,
				"--m3e-loading-indicator-active-indicator-color": "var(--chakra-colors-primary)",
				"--m3e-loading-indicator-contained-active-indicator-color":
					"var(--chakra-colors-on-primary)",
				"--m3e-loading-indicator-contained-container-color":
					"var(--chakra-colors-primary)",
			}}
		/>
	);
};
