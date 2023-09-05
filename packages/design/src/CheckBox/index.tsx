import { forwardRef, InputHTMLAttributes, useMemo, useState } from 'react';

import { css, useTheme } from '@emotion/react';
import { color } from '../../src/constants';

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * domElement id
   */
  id?: string;

  /**
   * Whether checkbox is abled or not.
   */
  isDisabled?: boolean;

  /**
   * Gap amount of checkbox between text.
   */
  spacing?: number;

  /**
   * Text aside from checkbox.
   */
  text?: string;
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ id, spacing, text, isDisabled = false, ...args }, ref) => {
    const theme = useTheme();

    const inputCheckboxDefaultStyle = useMemo(
      () => css`
        appearance: none;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 2px;
        &:focus-visible {
          box-shadow: 0 0 0 max(4px, 0.2em) ${color.purple.purple040};
          outline: none;
        }
        ${isDisabled &&
        css`
          border: 1.5px solid ${color.gray.gray020};
          /* background-color: ${color.purple.purple050}; */
          &:checked {
            border-color: transparent;
            /* background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e"); */
            background-size: 100% 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: ${color.purple.purple040};
          }
        `}
        ${!isDisabled &&
        css`
          border: 1.5px solid #000000;
          &:checked {
            border-color: transparent;
            /* background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e"); */
            background-size: 100% 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: ${color.purple.purple050};
          }
        `}
      `,
      [isDisabled],
    );

    const labelCheckboxStyle = useMemo(
      () => css`
        display: flex;
        align-items: center;
        user-select: none;
      `,
      [],
    );

    const paragraphStyle = useMemo(
      () => css`
        margin-left: ${spacing ? 0.25 * spacing : 0.25}rem;
        ${isDisabled &&
        css`
          color: ${color.gray.gray020};
        `}
      `,
      [spacing, isDisabled],
    );

    return (
      <label css={labelCheckboxStyle}>
        <input id={id} css={inputCheckboxDefaultStyle} type="checkbox" ref={ref} {...args} />
        {text && <p css={paragraphStyle}>{text}</p>}
      </label>
    );
  },
);

export default CheckBox;
