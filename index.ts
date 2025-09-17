import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";
import { animationStyles } from "./animation-styles.ts";
import { breakpoints } from "./breakpoints.ts";
import { globalCss } from "./global-css";
import { keyframes } from "./keyframes.ts";
import { layerStyles } from "./layer-styles.ts";
import { recipes } from "./recipes/index.ts";
import { semanticTokens } from "./semantic-tokens/index.ts";
import { slotRecipes } from "./slot-recipes/index.ts";
import { textStyles } from "./text-styles.ts";
import { tokens } from "./tokens/index.ts";

const themeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":where(:root, :host)",
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
    animationStyles,
  },
});

export const omnikit = createSystem(defaultBaseConfig, themeConfig);
export default omnikit;
