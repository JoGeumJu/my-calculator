import { atom } from "recoil";
export interface ThemeTypes {
  color0: string[];
  color1: string[];
  color2: string[];
  color3: string[];
  color4: string[];
}
export const fontSizeState = atom<number>({
  key: "fontSize",
  default: 16,
});

export const fontStyleState = atom<string>({
  key: "fontStyle",
  default: "KOFIH이종욱체",
});

export const themeModeState = atom<(string | number)[]>({
  key: "themeMode",
  default: ["0", 0],
});

export const themeColorState = atom<ThemeTypes>({
  key: "themeColor",
  default: {
    color0: ["#729599", "#313131"],
    color1: ["#BCC5CE", "#313131"],
    color2: ["#E6DFD9", "#313131"],
    color3: ["#BFB3A8", "#313131"],
    color4: ["#7A7067", "#fff"],
  },
});
