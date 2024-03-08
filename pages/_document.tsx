import Document, { Head, Main, NextScript } from 'next/document';

import {FcCalculator} from "react-icons/fc";

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="Dev.log"/>
                    <meta name="keywords" content="blog,react,antd,webpack,css,javascript" />
                    <title>나의 계산기, My Calculator</title>
                    <link rel="shortcut icon" href="/images/calculator.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}