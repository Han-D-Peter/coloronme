import { Global, css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global
          styles={css`
            body {
              margin: 0;
              width: 100%;
              height: 100%;
            }
            #__next {
              height: 100vh;
              position: relative;
              padding: 14px 28px 0 28px;
            }
          `}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
