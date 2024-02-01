import { css } from '@emotion/react';
import { useMemo } from 'react';
import { color } from '../constants';

interface TabsTitleProps {
  selected?: boolean;
  children: string;
  onClick?: (value: string) => void;
}

export default function TabsTitle({ selected, onClick, children }: TabsTitleProps) {
  const onClickTitle = () => {
    if (onClick) {
      onClick(children);
    }
  };

  const tabsTitleListStyle = useMemo(
    () => css`
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 25px;
      background: transparent;
      border-radius: 7px 7px 0 0;
    `,
    [],
  );

  const tabsTitleButtonStyle = useMemo(
    () => css`
      font-size: 14px;
      background: ${selected ? `${color.gray.gray010}` : '#fff'};
      color: ${selected ? `black` : `${color.gray.gray040}`};
      font-weight: ${selected ? `bold` : `regular`};
      border: 0.5px solid ${selected ? `${color.gray.gray010}` : `${color.gray.gray020}`};
      padding-top: 15px;
      padding-bottom: 15px;
      width: 100%;
      border-bottom: none;
      border-radius: 7px 7px 0 0;
    `,
    [selected],
  );
  return (
    <li css={tabsTitleListStyle}>
      <button css={tabsTitleButtonStyle} onClick={onClickTitle}>
        {children}
      </button>
    </li>
  );
}
