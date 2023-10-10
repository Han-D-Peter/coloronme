import React, { type InputHTMLAttributes, forwardRef, FormEventHandler, useMemo, FormEvent } from 'react';
import { css } from '@emotion/react';
import { MaxmizeOutline } from '../../src/assets/icons';
import { color } from '../../src/constants';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * domElement id
   */
  id?: string;

  /**
   * This property is for text of placeholder.
   */
  placeholder?: string;

  /**
   * Optional click handler
   */
  onSubmit?: FormEventHandler<HTMLFormElement>;

  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean;
};

const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, fullWidth = false, placeholder, onSubmit, ...args }, ref) => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onSubmit) {
        onSubmit(event);
      }
    };

    const inputSizeStyle = useMemo(() => {
      return css`
        width: ${fullWidth ? '100%' : '270px'};
      `;
    }, [fullWidth]);

    return (
      <form css={containerStyle} onSubmit={handleOnSubmit}>
        <input id={id} ref={ref} css={[inputStyle, inputSizeStyle]} placeholder={placeholder} {...args} />
        <button css={imageWrapperStyle} type="submit">
          <MaxmizeOutline width="20" height="20" color="#BCBCBC" />
        </button>
      </form>
    );
  },
);

const containerStyle = css`
  width: 100%;
  height: 42px;

  display: flex;
`;

const inputStyle = css`
  height: 100%;
  border-radius: 25px 0 0 25px;
  background: #eee;

  color: ${color.gray.gray050};
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  outline: none;
  border: none;
  padding: 0;
  padding-left: 18px;
  &:focus {
    border: none;
  }
`;

const imageWrapperStyle = css`
  height: 100%;

  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 25px 25px 0;
  outline: none;
  border: none;

  padding-right: 11px;
  :hover {
    cursor: pointer;
  }
`;

export default SearchInput;
