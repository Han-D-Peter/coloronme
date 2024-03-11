import { css } from '@emotion/react';
import { Button, Text } from '@design';
import { useEffect, useState } from 'react';
import { ColorCode, ColorName } from '@/src/query/personal-color/color.model';
import { usePersonalColor } from '@/src/query/personal-color/color.queries';
import { useGetUser, usePatchPersonalColor } from '@/src/query/user/user.queries';
import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import BottomSheet from '@/src/components/Common/BottomSheet';
import ColorOptions from '@/src/components/Home/components/ColorOptions';
import { queryClient } from '@/src/pages/_app';
import ColorBox from '../ColorBox';
import Tag from '@/src/components/Common/Tag';

interface Props {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
}

const MyColor = ({ isEdit, setIsEdit }: Props) => {
  const { data: userData, isLoading: userDataLoading } = useGetUser();

  const [currentColor, setCurrentColor] = useState<{ name: ColorName | null; code: number | null }>({
    name: null,
    code: null,
  });

  const { data: colorData, isLoading: colorDataLoading } = usePersonalColor(currentColor.code);

  const colors = colorData?.colors?.map((color: any) => `rgb(${color.r}, ${color.g}, ${color.b})`);

  const { mutate: selectMutate } = usePatchPersonalColor();

  const [isBottomSheetShown, onBottomSheetOpen, onBottomSheetClose] = useBooleanState();

  useEffect(() => {
    if (userData && userData.personalColorId) {
      setCurrentColor({
        code: userData.personalColorId,
        name: PERSONAL_COLOR_MAPPING[userData.personalColorId].name,
      });
    }
  }, [userData]);

  const changePersonalColor = (code: ColorCode, name: ColorName, id: number) => {
    setCurrentColor({
      name,
      code: id,
    });
    onBottomSheetClose();
  };

  const changeEditMode = () => {
    setIsEdit(true);
    onBottomSheetOpen();
  };

  const cancelColorChange = () => {
    if (!userData) return;

    setIsEdit(false);
    setCurrentColor({
      code: userData.personalColorId,
      name: PERSONAL_COLOR_MAPPING[userData.personalColorId].name,
    });
  };

  const changeColor = () => {
    selectMutate(currentColor.code, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getUser'] });
        setIsEdit(false);
      },
    });
  };

  return (
    <>
      <div css={titleContainer}>
        <div css={titleText}>{currentColor?.name}</div>
      </div>
      <div css={colorBoxContainer}>{colors?.map((color: string) => <ColorBox key={color} color={color} />)}</div>
      <div css={tagContainer}>{colorData?.moods?.map((mood: any) => <Tag key={mood.id}>{mood.name}</Tag>)}</div>
      {isEdit ? (
        <div css={editButtonContainer}>
          <Button variant="ghost" onClick={cancelColorChange}>
            <Text as="body" size="md" weight="bold">
              취소
            </Text>
          </Button>
          <Button variant="primary" onClick={changeColor}>
            <Text as="body" size="md" weight="bold">
              확인
            </Text>
          </Button>
        </div>
      ) : (
        <div css={buttonContainer}>
          <Button variant="primary" onClick={changeEditMode}>
            <Text as="body" size="md" weight="bold">
              퍼스널컬러 변경하기
            </Text>
          </Button>
        </div>
      )}
      {isBottomSheetShown && (
        <BottomSheet isOpen={isBottomSheetShown} close={onBottomSheetClose}>
          <ColorOptions onClick={changePersonalColor} />
        </BottomSheet>
      )}
    </>
  );
};

const titleText = css`
  font-size: 24px;
  font-family: 'Pretendard';
  color: #000;
  width: fit-content;
  cursor: pointer;
`;

const titleContainer = css`
  margin-top: 9%;
`;

const colorBoxContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 6%;
  min-height: 30vh;
`;

const tagContainer = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 9%;
  @media (max-height: 800px) {
    margin-top: 4%;
  }
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 17px;

  width: 100%;
  margin-top: 17%;
`;

const editButtonContainer = css`
  ${buttonContainer}
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export default MyColor;
