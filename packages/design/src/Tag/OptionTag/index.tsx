import { useMemo } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { color } from '../../../src/constants';
import { Downward } from '../../../src/assets/icons';

interface OptionTagProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  style?: SerializedStyles;
}

export function OptionTag({ children, onClick, selected = false, style }: OptionTagProps) {
  const activeColor = selected ? color.gray.gray100 : color.gray.gray030;

  const selectedStyle = useMemo(() => {
    return css`
      color: ${activeColor};
      border: 1px solid ${activeColor};
    `;
  }, [selected]);

  return (
    <div css={[containerStyle, selectedStyle, style]} onClick={onClick}>
      <div css={tagFontStyle}>{children}</div>
      <Downward width="15" height="12" color={activeColor} />
    </div>
  );
}

const containerStyle = css`
  padding: 0 16px;

  height: 32px;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  background: ${color.gray.gray000};
  border-radius: 30px;

  :hover {
    cursor: pointer;
  }
`;

const tagFontStyle = css`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;
