import { forwardRef, HTMLAttributes, useMemo } from 'react';

import { css } from '@emotion/react';
import { color } from '../../src/constants';

export type RadioProps = HTMLAttributes<HTMLInputElement> & {
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

  /**
   * Name is like a key of radio groups.
   */
  name: string;

  /**
   * Set value to radio box.
   */
  value: string;
};

const RadioBox = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, spacing, text = 'Type question text.', isDisabled = false, name, value, ...args }, ref) => {
    const inputRadioDefaultStyle = useMemo(
      () => css`
        &[type='radio'] {
          vertical-align: middle;
          appearance: none;
          border-style: solid;
          border-color: ${color.gray.gray100};
          border-radius: 50%;
          transition: border 0.5s ease-in-out;
          border-width: 1px;
          width: 16px;
          height: 16px;
        }
      `,
      [],
    );

    const inputRadioActionStyle = useMemo(
      () => css`
        &[type='radio']:checked {
          border-style: solid;
          border-width: 4px;
          border-color: ${color.purple.purple050};
        }

        /* &[type='radio']:focus-visible {
          outline-offset: max(2px, 0.1em);
          outline: max(2px, 0.1em) dotted pink;
        } */

        &[type='radio']:focus {
          box-shadow: 0 0 0 max(4px, 0.2em) ${color.purple.purple040};
          outline: none;
          cursor: pointer;
        }
      `,
      [],
    );

    const inputRadioDisabledStyle = useMemo(
      () => css`
        &[type='radio']:disabled {
          border-color: lightgray;
          box-shadow: none;
          opacity: 0.7;
          cursor: not-allowed;
        }
        &[type='radio']:checked {
          border-style: solid;
          border-width: 4px;
          border-color: ${color.purple.purple040};
        }

        &[type='radio']:disabled + span {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `,
      [],
    );

    const paragraphStyle = useMemo(
      () => css`
        vertical-align: middle;
        margin-left: ${spacing}px;
        font-size: 14px;
        ${isDisabled &&
        css`
          color: lightgray;
        `}
      `,
      [spacing, isDisabled],
    );
    return (
      <label>
        <input
          id={id}
          css={[inputRadioDefaultStyle, inputRadioActionStyle, inputRadioDisabledStyle]}
          type="radio"
          ref={ref}
          disabled={isDisabled}
          name={name}
          value={value}
          {...args}
        />
        {text && <span css={paragraphStyle}>{text}</span>}
      </label>
    );
  },
);

export default RadioBox;
