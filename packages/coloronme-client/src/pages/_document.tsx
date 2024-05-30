import { Html, Head, Main, NextScript } from 'next/document';
import GlobalStyle from '../style/GlobalStyle';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>
      <body>
        <GlobalStyle />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
