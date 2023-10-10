import { useMemo } from 'react';
import { css } from '@emotion/react';
import { color } from '../../../src/constants';
import { Downward } from '../../../src/assets/icons';

interface OptionTagProps {
  children: string;
  selected: boolean;
  onClick?: () => void;
}

export function OptionTag({ children, onClick, selected }: OptionTagProps) {
  const activeColor = selected ? color.gray.gray100 : color.gray.gray030;

  const selectedStyle = useMemo(() => {
    return css`
      color: ${activeColor};
      border: 1px solid ${activeColor};
    `;
  }, [selected]);

  return (
    <div css={[containerStyle, selectedStyle]} onClick={onClick}>
      <div css={tagFontStyle}>{children}</div>
      <div css={iconButtonStyle}>
        <Downward width="15" height="12" color={activeColor} />
      </div>
    </div>
  );
}

const containerStyle = css`
  height: 32px;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

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

  padding-left: 16px;
`;

const iconButtonStyle = css`
  padding-right: 15px;
`;
