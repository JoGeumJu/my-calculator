import React from "react";

import { useRecoilValue } from "recoil";
import { fontStyleState, themeModeState } from "../recoil/themeStates";

import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
}

interface Theme {
  fontstyle: string;
  thememode: (string | number)[];
}

export default function Layout(props: LayoutProps) {
  const themeModeG = useRecoilValue(themeModeState);
  const fontStyleG = useRecoilValue(fontStyleState);

  return (
    <Wrapper fontstyle={fontStyleG} thememode={themeModeG}>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div<Theme>`
  ${(props) =>
    props.thememode[1] === 0
      ? "background-color:#f3f3f3; color:#313131;"
      : "background-color:#0d0d0d; color:#ffffff;"}
  ${(props) => `font-family: ${props.fontstyle};`}
`;
