import React, { InputHTMLAttributes, useMemo } from 'react';
import { css } from '@emotion/react';
import { color } from '../constants';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonText: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const InputWithButton = ({ buttonText, onClick, fullWidth = false, ...props }: InputProps) => {
  const inputSizeStyle = useMemo(() => {
    return css`
      width: ${fullWidth ? '100%' : '266px'};
    `;
  }, [fullWidth]);

  return (
    <div css={containerStyle}>
      <input
        type="text"
        value={props.value}
        css={[inputStyle, inputSizeStyle]}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        {...props}
      />
      <button
        disabled={props.value === ''}
        onClick={onClick}
        css={css`
          ${buttonStyle}
          background:  ${props.value === '' ? color.gray.gray020 : color.gray.gray090};
          color: ${props.value === '' ? color.gray.gray040 : color.gray.gray000};
        `}
      >
        {buttonText}
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
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export default InputWithButton;
