import type { AppProps } from "next/app";
import "../styles/globals.css";
import styled from "@emotion/styled";

import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Navbar />
      <Component {...pageProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f3f3;
`;
