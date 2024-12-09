import { css } from '@emotion/react';
import Image from 'next/image';
import { Text } from '../../../../design/src/text';
import SeasonPicker, { Seasons } from '../../../../design/src/SeasonPicker';
import Dropdown from '../../../../design/src/Dropdown';
import ColorSelect from '../../../../design/src/ColorSelect';
import { useBoolean } from '../../../../libs/src/hooks';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useModifyUser, useUser } from '../shared/hooks/queryhooks/common.query';
import { color } from '../../../../design/src/constants';
import { useMyColor } from '../shared/hooks/queryhooks/color/color.query';
import { CustomColorType } from '../shared/hooks/queryhooks/color/color.type';
import { GENDER, KO_SEASON } from '../shared/constants/constants';
import { ColorRGB } from '../../../../design/src/ColorSelect/types';
import Button from '../../../../design/src/Button';
import { Modal } from '@design';
import Canvas from '../shared/component/Canvas/Canvas';
import { SEASONS } from '../shared/constants/color';

interface Member {
  memberId: string;
  onClose: () => void;
}

export default function Member({ memberId, onClose }: Member) {
  const { data } = useUser(memberId as string);
  const { data: myColor } = useMyColor();

  const { mutate } = useModifyUser();

  const [isOpen, open, close] = useBoolean(false);
  const [canvasObj, setCanvasObj] = useState<string>('');
  const [season, setSeason] = useState<Seasons | undefined>(undefined);
  const [selectedColorTypeName, setSelectedColorTypeName] = useState('');
  const [diagnosisText, setDiagnosisText] = useState('');

  useEffect(() => {
    if (!data?.data) return;
    const {
      data: { personalColorType, consultedContent, consultedDrawing, personalColorGroupName },
    } = data;

    if (consultedDrawing) setCanvasObj(consultedDrawing);
    if (personalColorGroupName) setSeason(SEASONS[personalColorGroupName]);
    if (personalColorType?.personalColorTypeName) setSelectedColorTypeName(personalColorType.personalColorTypeName);
    if (consultedContent) setDiagnosisText(consultedContent);
  }, [data]);

  const dropdownValues = useMemo(() => {
    if (!myColor?.data || !season) return [];

    return myColor?.data![KO_SEASON[season]] as CustomColorType[];
  }, [myColor, season]);

  const selectedColorType = useMemo(() => {
    if (!dropdownValues || !selectedColorTypeName) return;
    const isExistedValue = dropdownValues.find((value) => {
      return value.personalColorTypeName === selectedColorTypeName;
    });
    return isExistedValue || data?.data?.personalColorType;
  }, [dropdownValues, selectedColorTypeName, data]);
  const [selectedColors, setSelectedColors] = useState<(ColorRGB | null)[]>([null, null, null, null, null, null, null]);

  useEffect(() => {
    if (!dropdownValues || !selectedColorTypeName) return;
    const selectedColorType = dropdownValues.find((value) => {
      return value.personalColorTypeName === selectedColorTypeName;
    });
    if (selectedColorType)
      return setSelectedColors([
        ...selectedColorType.colors,
        ...new Array(7 - selectedColorType.colors.length).fill(null),
      ]);
    if (!selectedColorType && data!.data!.personalColorType!.colors)
      return setSelectedColors([
        ...data!.data!.personalColorType!.colors,
        ...new Array(7 - data!.data!.personalColorType!.colors.length).fill(null),
      ]);
  }, [data, dropdownValues, selectedColorTypeName]);

  const 수정할_정보 = data?.data
    ? {
        userId: data.data.memberId.toString(),
        personalColorTypeId: selectedColorType?.personalColorTypeId!,
        consultedContent: diagnosisText,
        consultedDrawing: canvasObj,
        consultedDate: new Date().toISOString(),
        colors: selectedColors.filter((color) => !!color).map((color) => color?.colorId) as number[],
      }
    : null;

  const onSubmit = () => {
    if (!수정할_정보) return;

    mutate(수정할_정보, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  if (!data?.data) return <div>Loading...</div>;

  return (
    <section
      css={css`
        height: 75vh;
        padding: 33px 31px;
        overflow: scroll;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 27px;
        `}
      >
        {data.data.profileImageUrl ? (
          <div
            css={css`
              width: 57px;
              height: 57px;

              border-radius: 200px;
            `}
          >
            <img
              css={css`
                border-radius: 200px;
              `}
              src={data.data.profileImageUrl}
              alt="profile image"
              width={57}
              height={57}
            />
          </div>
        ) : (
          <div
            css={css`
              width: 57px;
              height: 57px;
              background-color: green;
              border-radius: 200px;
            `}
          ></div>
        )}
        <div
          css={css`
            margin-left: 15px;
            margin-bottom: 10px;
          `}
        >
          <div>
            <Text as="title" size="sm" weight="bold">
              {data.data.nickname}
            </Text>
          </div>
          <div>
            <Text
              as="body"
              size="sm"
              style={css`
                color: ${color.gray.gray050};
              `}
            >
              {data.data.email}
            </Text>
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-top: 35px;
        `}
      >
        <div>
          <Text as="title" size="xs" weight="bold">
            진단일
          </Text>
        </div>
        <div
          css={css`
            margin-top: 20px;
          `}
        >
          <Text as="body" size="md">
            {data.data.consultedDate || '진단 전'}
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 42px;
        `}
      >
        <div
          css={css`
            margin-top: 18px;
          `}
        >
          <SeasonPicker value={season} onClick={(value) => setSeason(value)} />
        </div>
      </div>
      <div
        css={css`
          margin-top: 42px;
        `}
      >
        <div>
          <Text as="title" size="xs" weight="bold">
            퍼스널컬러 타입2
          </Text>
        </div>
        <div
          css={css`
            margin-top: 18px;
            width: 187px;
          `}
        >
          <Dropdown
            value={selectedColorTypeName}
            placeholder={selectedColorTypeName || '타입을 선택해 주세요'}
            onChange={(value) => setSelectedColorTypeName(value)}
          >
            {dropdownValues.map((value) => {
              return <Dropdown.Element key={value.personalColorTypeId}>{value.personalColorTypeName}</Dropdown.Element>;
            })}
          </Dropdown>
        </div>
      </div>
      {selectedColorType && (
        <div
          css={css`
            margin-top: 42px;
          `}
        >
          <div>
            <Text as="title" size="xs" weight="bold">
              퍼스널 컬러 색상
            </Text>
          </div>
          <div
            css={css`
              display: flex;
              gap: 10px;
              justify-content: center;
              flex-wrap: wrap;
            `}
          >
            {selectedColors.map((color, index) => {
              if (!color)
                return (
                  <ColorSelect
                    key={index}
                    onChange={(value) => {
                      const copied: (ColorRGB | null)[] = [...selectedColors];
                      copied[index] = value;
                      setSelectedColors(copied);
                    }}
                  />
                );
              return (
                <ColorSelect
                  key={color.colorId}
                  value={color}
                  onChange={(value) => {
                    const copied: (ColorRGB | null)[] = [...selectedColors];
                    copied[index] = value;
                    setSelectedColors(copied);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
      <div
        css={css`
          margin-top: 40px;
        `}
      >
        <Text as="title" size="xs" weight="bold">
          추가 정보
        </Text>
        <div
          css={css`
            margin-top: 22px;
          `}
        >
          <Text as="body" size="md">
            {`${new Date().getFullYear() - data.data.age}년생 ${GENDER[data.data.genderEnum]}`}
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 40px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div>
            <Text as="title" size="xs" weight="bold">
              진단 내용
            </Text>
          </div>
        </div>
        <div
          css={css`
            position: relative;
            margin-top: 18px;
            height: 218px;
            padding: 0;
          `}
        >
          <textarea
            placeholder="* 진단 내용을 입력해주세요."
            value={diagnosisText}
            onChange={(e) => {
              setDiagnosisText(e.target.value);
            }}
            css={css`
              height: calc(100% - 32px);
              width: calc(100% - 32px);
              border: 1px solid ${color.gray.gray020};
              border-radius: 5px;
              padding: 16px;
              &::placeholder {
                font-size: 14px;
                font-weight: 400;
                font-family: pretendard;
              }
            `}
          />
          <div
            css={css`
              position: absolute;
              right: 16px;
              bottom: 16px;
            `}
          >
            <button
              css={css`
                background: white;
                border: 0;
                width: 40px;
                height: 40px;
                border-radius: 100px;
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
              `}
              onClick={open}
            >
              <img src="/icons/vector/pencil.svg" alt="pencil" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 17px;
        `}
      >
        <Button variant="ghost" size="lg" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" size="lg" onClick={onSubmit}>
          저장
        </Button>
      </div>
      <Modal sx={{ display: 'flex', padding: '59px 16px' }} isOpen={isOpen} close={close} open={open}>
        <div
          css={css`
            padding: 29px 31px;
          `}
        >
          <div>
            <Text as="title" size="lg" weight="bold">
              진단 내용 작성
            </Text>
          </div>
          <div
            css={css`
              margin-top: 18px;
            `}
          >
            <Canvas
              value={canvasObj}
              onChange={(e) => {
                setCanvasObj(JSON.stringify(e));
              }}
            />
          </div>
          <div
            css={css`
              width: 100%;
              margin-top: 26px;
              display: flex;
              justify-content: space-between;
            `}
          >
            <Button
              onClick={() => {
                setCanvasObj('');
                close();
              }}
              variant="ghost"
              size="md"
            >
              취소
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                close();
              }}
            >
              저장
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
