import { Global, css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global
          styles={css`
            @font-face {
              font-family: pretendard;
              font-weight: 800;
              src: url('/fonts/Pretendard-Bold.otf');
            }
            @font-face {
              font-family: pretendard;
              font-weight: 400;
              src: url('/fonts/Pretendard-Medium.otf');
            }
            body {
              margin: 0;
              width: 100%;
              height: 100%;
              font-family: 'pretendard';
            }
            #__next {
              height: 100vh;
              position: relative;
              padding: 14px 28px 0 28px;
            }
          `}
        />
        <Component {...pageProps} />
        <ReactQueryDevtools position="left" initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
