import { css } from '@emotion/react';
import { Text } from '../../text';
import { useColorContext } from '../context/useColorContext';
import { ColorGroup, ColorRGB, ColorType } from '../types';
import { colorGroupNameMap } from '../../utils';

export default function ColorPicker({
  code = 'ks',
  onPick,
  group,
}: {
  group: ColorGroup;
  code?: ColorType;
  onPick: (colorId: ColorRGB) => void;
}) {
  const color = useColorContext();
  if (!color) return <div>Loading...</div>;

  return (
    <div
      css={css`
        margin-top: 22px;
      `}
    >
      <Text as="title" size="xs" weight="bold">
        {group} {colorGroupNameMap[group]}
      </Text>
      <div
        css={css`
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        `}
      >
        {color[code][group].map((col) => (
          <ColorRow color={col} key={col.colorId} onClick={onPick} />
        ))}
      </div>
    </div>
  );
}

function ColorRow({ color, onClick }: { color: ColorRGB; onClick: (color: ColorRGB) => void }) {
  const rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;
  function clickRow() {
    onClick && onClick(color);
  }
  return (
    <div
      onClick={clickRow}
      css={css`
        display: flex;
        align-items: center;
        gap: 15px;
      `}
    >
      <div
        css={css`
          width: 32px;
          height: 32px;
          border-radius: 100px;
          background-color: ${rgb};
        `}
      ></div>
      <div>
        <Text as="title" size="xs" weight="bold">
          {color.name}
        </Text>
      </div>
    </div>
  );
}
