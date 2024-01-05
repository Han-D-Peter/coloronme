import { css } from '@emotion/react';
import { InputHTMLAttributes, forwardRef, useMemo, useState } from 'react';
import { color, fontSize } from '../../src/constants';
import { CancelIcon, Warnning } from '../../src/assets/icons';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * domElement id
   */
  id?: string;

  /**
   * This property for user's typing is wrong.
   */
  isInvalid?: boolean;

  /**
   * error message.
   */
  errorMessage?: string;

  /**
   * This property is for text of placeholder.
   */
  placeholderText?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', id, isInvalid = false, errorMessage, placeholderText = 'placeholder...', ...args }, ref) => {
    const [value, setValue] = useState(args.value);
    const inputStyle = useMemo(
      () => css`
        width: 100%;
        padding-left: 15px;
        height: 36px;
        outline: none;
        font-size: ${fontSize.body.md}px;
        border: 0;
        border-bottom: 1px solid ${value ? color.blue.blue100 : color.gray.gray050};
        &:hover {
          border-bottom: 1px solid ${color.blue.blue100};
        }
        &:focus {
          border: 1px solid ${isInvalid ? color.red.red100 : color.blue.blue100};
        }
        &::placeholder {
          color: ${color.gray.gray020};
        }
        &:disabled {
          border: 0;
          background-color: transparent;
          border-bottom: 1px solid ${color.gray.gray020};
        }
      `,
      [isInvalid, value],
    );

    const inputOutlineSelectorStyle = useMemo(
      () => css`
        ${isInvalid &&
        css`
          outline: none;
          border: 1px solid ${color.red.red100};
        `}
      `,
      [isInvalid],
    );
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 100%;
          `}
        >
          <div>
            <input
              css={[inputStyle, inputOutlineSelectorStyle]}
              id={id}
              ref={ref}
              placeholder={placeholderText}
              onChange={(e) => {
                if (args.onChange) {
                  args.onChange(e);
                }
                setValue(e.target.value);
              }}
              {...args}
            />
          </div>
          <div
            css={css`
              margin-top: -5px;
            `}
          >
            <span
              css={css`
                color: ${color.red.red100};
                font-size: ${fontSize.caption.sm}px;
              `}
            >
              {isInvalid && errorMessage}
            </span>
          </div>
        </div>
        {!isInvalid ? (
          <div
            css={css`
              margin-top: 9px;
              margin-right: 3px;
              width: 14px;
              height: 14px;
            `}
          >
            {value && <CancelIcon width="14" height="14" color={color.gray.gray030} />}
          </div>
        ) : (
          <div
            css={css`
              width: 14px;
              height: 14px;
              margin-bottom: 13px;
            `}
          >
            <Warnning width="14" height="14" color={color.red.red100} />
          </div>
        )}
      </div>
    );
  },
);

export default Input;
