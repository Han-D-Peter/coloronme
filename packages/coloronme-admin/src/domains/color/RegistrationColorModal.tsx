import { Button, Input, Modal, Text } from '@design';
import { css } from '@emotion/react';
import { Seasons, UpperSeasons } from '../shared/hooks/queryhooks/color/color.type';
import { SEASONS } from '../shared/constants/color';
import { useState } from 'react';
import ColorSelect from '../../../../design/src/ColorSelect/index';
import { ColorRGB } from '../../../../design/src/ColorSelect/types';
import { useMutateColorType } from '../shared/hooks/queryhooks/color/color.query';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface RegistrationColorModal {
  season: Seasons;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export default function RegistrationColorModal({ isOpen, open, close, season }: RegistrationColorModal) {
  const { mutate, isLoading } = useMutateColorType();
  const [name, setName] = useState('');

  const [colors, setColors] = useState<(ColorRGB | null)[]>([null, null, null, null, null, null, null]);

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
                <ColorSelect onChange={changeColor(0)} />
                <ColorSelect onChange={changeColor(1)} />
                <ColorSelect onChange={changeColor(2)} />
                <ColorSelect onChange={changeColor(3)} />
              </div>
              <div css={colorPickerContainerStyle}>
                <ColorSelect onChange={changeColor(4)} />
                <ColorSelect onChange={changeColor(5)} />
                <ColorSelect onChange={changeColor(6)} />
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
`;

const btnStyle = css`
  width: 132px;
  height: 45px;
`;
