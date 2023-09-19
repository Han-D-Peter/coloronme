import { css } from '@emotion/react';
import { ReactNode } from 'react';
import Navigation from './Navigation';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <main>{children}</main>
      <footer
        css={css`
          position: relative;
        `}
      >
        <Navigation />
      </footer>
    </>
  );
}
