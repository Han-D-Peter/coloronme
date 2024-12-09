import { Button, Input, Modal, Text } from '@design';
import { css } from '@emotion/react';
import { CustomColorType, Seasons, UpperSeasons } from '../shared/hooks/queryhooks/color/color.type';
import { SEASONS } from '../shared/constants/color';
import { useEffect, useState } from 'react';
import ColorSelect from '../../../../design/src/ColorSelect/index';
import { ColorRGB } from '../../../../design/src/ColorSelect/types';
import { useModifyColorType, useMutateColorType } from '../shared/hooks/queryhooks/color/color.query';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface ModifyingColorModal {
  season: Seasons;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  colorGroup: CustomColorType | null;
}

export default function ModifyingColorModal({ isOpen, open, close, season, colorGroup }: ModifyingColorModal) {
  const [name, setName] = useState(colorGroup ? colorGroup.personalColorTypeName : '');
  const { mutate, isLoading } = useModifyColorType();

  const [colors, setColors] = useState<(ColorRGB | null)[]>(
    colorGroup ? colorGroup.colors : new Array(7).map(() => null),
  );

  function changeColor(index: number) {
    const target = [...colors];
    return function changeColor(value: ColorRGB | null) {
      target[index] = value;
      setColors(target);
    };
  }

  function submit() {
    mutate(
      {
        personalColorTypeId: colorGroup?.personalColorTypeId,
        personalColorGroup: season,
        personalColorTypeName: name,
        colors: colors.reduce<number[]>((acc, curr) => {
          if (curr) acc.push(curr.colorId);
          return acc;
        }, []),
      },
      {
        onSuccess: () => {
          close();
        },
      },
    );
  }

  useEffect(() => {
    if (!colorGroup) return;
    setName(colorGroup.personalColorTypeName);
    setColors([...colorGroup.colors, ...new Array(7 - colorGroup.colors.length).map(() => null)]);
  }, [colorGroup]);

  return (
    <>
      <Modal
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        isOpen={isOpen}
        close={close}
        open={open}
      >
        <div
          css={css`
            padding: 58px 43px 35px 43px;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 12px;
            `}
          >
            <div>
              <Text as="title" size="sm" weight="bold">
                {SEASONS[season]}
              </Text>
            </div>
            <div>
              <Input placeholder="컬러타입 이름 입력" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div
            css={css`
              margin-top: 32px;
              margin-bottom: 30px;
            `}
          >
            <div
              css={css`
                margin-bottom: 16px;
              `}
            >
              <Text as="title" size="xs" weight="bold">
                퍼스털컬러 색상
              </Text>
            </div>
            <div>
              <div css={colorPickerContainerStyle}>
                {colors.map((color, index) =>
                  color ? (
                    <ColorSelect key={color.colorId} value={color} onChange={changeColor(index)} />
                  ) : (
                    <ColorSelect key={index} onChange={changeColor(index)} />
                  ),
                )}
              </div>
            </div>
          </div>
          <div
            css={css`
              width: 100%;
              display: flex;
              gap: 17px;
            `}
          >
            <Button onClick={close} style={btnStyle} variant="ghost">
              취소
            </Button>
            <Button onClick={submit} style={btnStyle}>
              저장
            </Button>
          </div>
        </div>
      </Modal>
      <Backdrop sx={{ zIndex: 10000 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

const colorPickerContainerStyle = css`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const btnStyle = css`
  width: 132px;
  height: 45px;
`;
