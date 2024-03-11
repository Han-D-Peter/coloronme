import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useAboutMe, useGetUser, usePatchPersonalColor } from '@/src/query/user/user.queries';
import { useLogout } from '@/src/query/auth/auth.queries';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { usePersonalColor } from '@/src/query/personal-color/color.queries';
import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import Header from './components/Header';
import Profile from './components/Profile';
import ColorBox from './components/ColorBox';
import Loading from '../Common/Loading';
import { queryClient } from '@/src/pages/_app';
import Tag from '../Common/Tag';
import { Button } from '@design';

const MypageView = () => {
  const router = useRouter();

  const { data: userData, isLoading: userDataLoading } = useGetUser();
  const { mutate: logoutMutate } = useLogout();

  const [isOpen, open, close] = useBooleanState(false);

  const [currentColor, setCurrentColor] = useState({
    code: '',
    name: '',
  });

  const { data: colorData, isLoading: colorDataLoading } = usePersonalColor(currentColor.code || 1);

  const { data: userDiagnose, isLoading: isUserDiagnoseLoading } = useAboutMe();

  const colors = colorData?.colors?.map((color: any) => `rgb(${color.r}, ${color.g}, ${color.b})`);
  const { mutate: selectMutate } = usePatchPersonalColor();

  const [isShown, onOpen, onClose] = useBooleanState();

  const [isEdit, setIsEdit] = useState(false);

  const headerText = isEdit ? '마이페이지 변경' : '마이페이지';

  useEffect(() => {
    if (userData && userData.personalColorId) {
      setCurrentColor({
        // code: PERSONAL_COLOR_MAPPING[userData.personalColor],
        code: userData.personalColorId,
        name: PERSONAL_COLOR_MAPPING[userData.personalColorId].name,
      });
    }
  }, [userData]);

  const handleColorSelection = (colorCode: any, colorName: any, index: any) => {
    console.log(index);
    setCurrentColor({
      name: colorName,
      code: index + 1,
    });
    setIsEdit(true);
    onClose();
  };

  const handleCancel = () => {
    setIsEdit(false);
    setCurrentColor({
      code: PERSONAL_COLOR_MAPPING[userData.personalColor],
      name: userData.personalColor,
    });
  };

  const handleSubmit = () => {
    selectMutate(currentColor.code, {
      onSuccess: () => {
        queryClient.invalidateQueries(['getUser']);
        setIsEdit(false);
      },
    });
  };

  const handleLogout = () => {
    logoutMutate(undefined, {
      onSuccess: () => {
        router.push('/login');
      },
    });
  };

  if (userDataLoading) {
    return <Loading />;
  }
  return (
    <DefaultLayout header={<Header>{headerText}</Header>}>
      <div css={mainContainer}>
        <div css={profileContainer}>
          <Profile data={userData} />
        </div>
        <div css={titleContainer}>
          <div css={titleText}>{currentColor?.name}</div>
        </div>
        <div css={colorBoxContainer}>{colors?.map((color: string) => <ColorBox key={color} color={color} />)}</div>
        {/* <div css={tagContainer}>
          {colorData?.moods?.map((mood: any) => (
            <Tag key={mood.name}>{mood.name}</Tag>
          ))}
        </div> */}
        <div css={tagContainer}>
          {(colorData?.moods || []).map((mood: any, index: number) => (
            <Tag key={index}>{mood ? mood.name : '#청순한'}</Tag>
          ))}
        </div>
        {isEdit ? (
          <div
            css={css`
              ${buttonContainer}
              display: flex;
              flex-direction: row;
              gap: 15px;
              margin-bottom: 20%;
            `}
          >
            <Button onClick={handleCancel}>취소</Button>
            <Button variant="primary" onClick={handleSubmit}>
              확인
            </Button>
          </div>
        ) : (
          <div css={buttonContainer}>
            <Button variant="primary" onClick={onOpen}>
              퍼스널컬러 변경하기
            </Button>
          </div>
        )}

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
            <div css={titleStyle}>진단 내용</div>
          </div>
          <div
            css={css`
              position: relative;
              margin-top: 18px;
              height: 218px;
              padding: 0;
            `}
          >
            <div
              placeholder="* 진단 내용을 입력해주세요."
              css={css`
                height: calc(100% - 32px);
                width: 100%;
                border: 1px solid #e0e0e0;
                border-radius: 5px;
                padding: 16px;
                &::placeholder {
                  font-size: 14px;
                  font-weight: 400;
                  font-family: pretendard;
                }
              `}
            >
              {userDiagnose?.consultedContent}
            </div>
            <div
              css={css`
                position: absolute;
                right: 16px;
                bottom: 45px;
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
                <img src="/images/Vector.png" alt="pencil" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>

        <button css={logoutButton} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
      {/* {isShown && <BottomSheet isOpen={isShown} close={onClose} handleClick={handleColorSelection} />} */}
    </DefaultLayout>
  );
};

const titleText = css`
  font-size: 24px;
  font-family: 'Pretendard';
  color: #000;
  width: fit-content;
  cursor: pointer;
`;

const mainContainer = css`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const profileContainer = css`
  margin-top: 3%;
`;

const titleContainer = css`
  margin-top: 7%;
`;

const colorBoxContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
  height: 40%;
`;

const tagContainer = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10%;
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
  margin-top: auto;
  margin-bottom: 10%;
  /* 아이폰 SE */
  @media (max-height: 800px) {
    gap: 8px;
    margin-bottom: 5%;
  }
`;

const logoutButton = css`
  width: 100%;
  color: #8e9294;
  font-size: 12px;
  font-family: 'Pretendard';
  width: fit-content;
  border-bottom: 1px solid #8e9294;
`;

const titleStyle = css`
  color: #000;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18px;
`;

export default MypageView;
