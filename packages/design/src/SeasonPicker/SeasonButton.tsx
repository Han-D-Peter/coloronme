import { css } from '@emotion/react';
import Button from '../Button';
import { Seasons } from '.';

interface SeasonButton {
  isSelected: boolean;
  onClick: (value: Seasons) => void;
  children: Seasons;
}

export default function SeasonButton({ children, isSelected, onClick }: SeasonButton) {
  function pickSeason() {
    onClick(children);
  }
  return (
    <Button
      fullWidth={true}
      onClick={pickSeason}
      variant={isSelected ? 'primary' : 'gray'}
      radius="sm"
      style={css`
        white-space: nowrap;
        padding: 13px 14px;
      `}
    >
      {children}
    </Button>
  );
}
