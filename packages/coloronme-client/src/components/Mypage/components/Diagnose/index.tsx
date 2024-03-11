import { css } from '@emotion/react';
import { useBooleanState } from '@/src/hooks/useBooleanState';
import { useAboutMe } from '@/src/query/user/user.queries';

const Diagnose = () => {
  const { data: userDiagnose, isLoading: isUserDiagnoseLoading } = useAboutMe();
  const [isDiagnoseCanvasOpen, onDiagnoseCanvasOpen, onDiagnoseCanvasClose] = useBooleanState(false);

  return (
    <div
      css={css`
        margin-top: 10%;
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
          {/* <button
            css={css`
              background: white;
              border: 0;
              width: 40px;
              height: 40px;
              border-radius: 100px;
              box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
            `}
            onClick={onDiagnoseCanvasOpen}
          >
            <img src="/images/Vector.png" alt="pencil" width={20} height={20} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

const titleStyle = css`
  color: #000;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18px;
`;

export default Diagnose;
