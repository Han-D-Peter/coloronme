import React, { useMemo } from 'react';
import { css } from '@emotion/react';
import { color } from '../../src/constants';

type URLInputProps = {
  url: string;
  fullWidth?: boolean;
};

const URLInput = ({ url, fullWidth = false }: URLInputProps) => {
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // alert(`${url} 복사`);
      })
      .catch((err) => {
        console.error('URL 복사에 실패하였습니다:', err);
      });
  };

  const inputSizeStyle = useMemo(() => {
    return css`
      width: ${fullWidth ? '100%' : '266px'};
    `;
  }, [fullWidth]);

  return (
    <div css={containerStyle}>
      <input type="text" value={url} readOnly css={[inputStyle, inputSizeStyle]} />
      <button onClick={handleCopyClick} css={buttonStyle}>
        복사
      </button>
    </div>
  );
};

const containerStyle = css`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
`;

const inputStyle = css`
  height: 100%;
  padding: 0;
  padding-left: 11px;
  outline: none;
  border-radius: 5px 0 0 5px;
  color: ${color.gray.gray040};
  box-sizing: border-box;
  border: 1px solid ${color.gray.gray020};
`;

const buttonStyle = css`
  width: 53px;
  height: 100%;

  border-radius: 0 5px 5px 0;
  outline: none;
  border: 1px solid ${color.gray.gray040};
  background: ${color.gray.gray040};
  color: ${color.gray.gray000};

  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export default URLInput;
