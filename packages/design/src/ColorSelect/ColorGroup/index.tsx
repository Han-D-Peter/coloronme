import { css } from '@emotion/react';
import { useColorContext } from '../context/useColorContext';
import { ColorGroup as ColorGroupTypes, ColorType, KsColorGoup, PccsColorGroup } from '../types';
import { color as colorConstant } from '../../constants';
import { colorGroupNameMap } from '../../utils';
import { Text } from '../../text';

interface ColorGroup {
  code?: ColorType;
  onSelect: (value: ColorGroupTypes) => void;
}

export default function ColorGroup({ code = 'ks', onSelect }: ColorGroup) {
  const color = useColorContext();
  if (!color) return <div>Loading...</div>;

  return (
    <div
      css={css`
        margin-top: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3px;
      `}
    >
      {code === 'ks' && (
        <>
          <div css={colorCircleContainer}>
            <ColorGroupItem code={code} colorGroup={'wh'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'ltg'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'g'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'dkg'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'bk'} onClick={onSelect} />
          </div>
          <div css={colorCircleContainer}>
            <ColorGroupItem code={code} colorGroup={'pl'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'sf'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'d'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'dk'} onClick={onSelect} />
          </div>
          <div css={colorCircleContainer}>
            <ColorGroupItem code={code} colorGroup={'lt'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'bs'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'dp'} onClick={onSelect} />
          </div>
          <div css={colorCircleContainer}>
            <ColorGroupItem code={code} colorGroup={'v'} onClick={onSelect} />
          </div>
        </>
      )}
      {code === 'pccs' && (
        <>
          <div>
            <ColorGroupItem code={code} colorGroup={'p'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'ltg'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'g'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'dkg'} onClick={onSelect} />
          </div>
          <div>
            <ColorGroupItem code={code} colorGroup={'lt'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'sf'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'d'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'dk'} onClick={onSelect} />
          </div>
          <div>
            <ColorGroupItem code={code} colorGroup={'b'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'s'} onClick={onSelect} />
            <ColorGroupItem code={code} colorGroup={'dp'} onClick={onSelect} />
          </div>
          <div>
            <ColorGroupItem code={code} colorGroup={'v'} onClick={onSelect} />
          </div>
        </>
      )}
    </div>
  );
}

function ColorGroupItem({
  code,
  colorGroup,
  onClick,
}:
  | { colorGroup: PccsColorGroup; code: 'pccs'; onClick?: (value: ColorGroupTypes) => void }
  | { colorGroup: KsColorGoup; code: 'ks'; onClick?: (value: ColorGroupTypes) => void }) {
  const color = useColorContext();
  if (!color) return null;

  const rotateDegreeByLength = 360 / color[code][colorGroup]?.length;

  function clickCircle() {
    onClick && onClick(colorGroup);
  }
  return (
    <div
      onClick={clickCircle}
      css={css`
        display: flex;
        flex-direction: column;
        width: 68px;
        height: 68px;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {color[code][colorGroup]?.map((col, index) => {
          const rgb = `rgb(${col.r}, ${col.g}, ${col.b})`;
          console.log('rgb', rgb);
          const rotageDegree = `rotate(${rotateDegreeByLength * index}deg)`;

          return (
            <div
              css={css`
                top: 0;
                position: absolute;
                height: 70px;
                transform: ${rotageDegree};
              `}
              key={col.colorId}
            >
              <div
                css={css`
                  width: 12px;
                  height: 12px;
                  border-radius: 100px;
                  background-color: ${rgb};
                `}
              ></div>
            </div>
          );
        })}
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              font-size: 8px;
              color: ${colorConstant.gray.gray040};
            `}
          >
            {colorGroup}
          </div>
          {colorGroupNameMap[colorGroup].split(' ').map((text) => {
            return (
              <Text as="caption" size="sm">
                {text}
              </Text>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const colorCircleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
