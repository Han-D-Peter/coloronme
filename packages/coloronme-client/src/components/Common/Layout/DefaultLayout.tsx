import { forwardRef, ReactNode, useMemo, LegacyRef, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import Navigation from '../Navigation';
import LoadingSpinner from '../Loading/LoadingSpinner';

type DefaultLayoutProps = HTMLAttributes<HTMLDivElement> & {
  isLogined?: boolean;
  header?: ReactNode;
  children: ReactNode | ReactNode[];
  centered?: boolean;
  requireAuth?: boolean;
  floatingSection?: ReactNode;
  isLoading?: boolean;
};

const DefaultLayout = (
  {
    isLogined,
    header,
    children,
    centered = false,
    requireAuth = true,
    floatingSection,
    isLoading = false,
    ...args
  }: DefaultLayoutProps,
  ref: LegacyRef<HTMLDivElement>,
) => {
  const layoutMainStyle = useMemo(() => {
    return css`
      height: calc(100vh - 81px - 63px);
      ${centered &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    `;
  }, [isLogined, centered]);

  return (
    <div css={mainContainer} ref={ref} {...args}>
      {header && <header>{header}</header>}
      {isLoading ? <LoadingSpinner /> : <main css={[layoutMainStyle]}>{children}</main>}
      <div css={navigationContainer}>
        {floatingSection && <div css={floatingSectionStyle}>{floatingSection}</div>}
        <Navigation />
      </div>
    </div>
  );
};

const mainContainer = css`
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const navigationContainer = css`
  position: relative;
  z-index: 1;
`;

const floatingSectionStyle = css`
  position: absolute;
  top: -63px;
  right: 12px;
`;

export default forwardRef(DefaultLayout);
