import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

import "../styles/globals.css";
import styled from "@emotion/styled";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
