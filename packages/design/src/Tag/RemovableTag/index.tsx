import { css } from '@emotion/react';
import { CloseOutline } from '../../../src/assets/icons';
import { color } from '../../../src/constants';

interface RemovableTagProps {
  children: string;
  onClose?: () => void;
}

export function RemovableTag({ children, onClose }: RemovableTagProps) {
  return (
    <div css={containerStyle}>
      <div css={tagFontStyle}>{children}</div>
      <div css={closeButtonStyle} onClick={onClose}>
        <CloseOutline width="12" height="12" color="#C6C6C6" />
      </div>
    </div>
  );
}

const containerStyle = css`
  height: 26px;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;

  background: ${color.gray.gray000};
  border: 1px solid var(--gray-050, #f7f7f7);
  border-radius: 30px;
  border: 1px solid ${color.gray.gray030};
`;

const tagFontStyle = css`
  color: ${color.gray.gray040};

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;

  padding-left: 18px;
`;

const closeButtonStyle = css`
  padding-right: 17px;
  :hover {
    cursor: pointer;
  }
`;
