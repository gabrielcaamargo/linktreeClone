import "styled-components";

import dark from "../assets/styles/themes/dark";
import light from "../assets/styles/themes/light";

export type DarkTheme = typeof dark;
export type LightTheme = typeof light;

declare module "styled-components" {
  export interface DefaultTheme extends DarkTheme {}
  export interface DefaultTheme extends LightTheme {}
}
