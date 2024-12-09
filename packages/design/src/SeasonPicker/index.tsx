import { css } from '@emotion/react';
import { Text } from '../text';
import { useEffect, useState } from 'react';
import SeasonButton from './SeasonButton';

export type Seasons = Spring | Summer | Autumn | Winter;
type Spring = '봄 웜';
type Summer = '여름 쿨';
type Autumn = '가을 웜';
type Winter = '겨울 쿨';

const seasons: Record<string, Seasons> = {
  spring: '봄 웜',
  summer: '여름 쿨',
  autumn: '가을 웜',
  winter: '겨울 쿨',
};

interface SeasonPicker {
  value?: Seasons | null;
  onClick?: (value: Seasons) => void;
}

export default function SeasonPicker({ value = null, onClick }: SeasonPicker) {
  const [selectedSeason, setSelectedSeason] = useState<Seasons | null>(value);

  function clickButton(btnValue: Seasons) {
    value === null && setSelectedSeason(btnValue);
    onClick && onClick(btnValue);
  }

  useEffect(() => {
    setSelectedSeason(value);
  }, [value]);

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        css={css`
          margin-bottom: 18px;
        `}
      >
        <Text as="title" size="xs" weight="bold">
          계절 선택
        </Text>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          gap: 10px;
        `}
      >
        <SeasonButton onClick={clickButton} isSelected={selectedSeason === seasons.spring}>
          {seasons.spring}
        </SeasonButton>
        <SeasonButton onClick={clickButton} isSelected={selectedSeason === seasons.summer}>
          {seasons.summer}
        </SeasonButton>
        <SeasonButton onClick={clickButton} isSelected={selectedSeason === seasons.autumn}>
          {seasons.autumn}
        </SeasonButton>
        <SeasonButton onClick={clickButton} isSelected={selectedSeason === seasons.winter}>
          {seasons.winter}
        </SeasonButton>
      </div>
    </div>
  );
}
