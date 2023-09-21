import { ButtonHTMLAttributes, forwardRef, useMemo, ReactNode, ForwardedRef } from 'react';
import { css } from '@emotion/react';
import { buttonSize, buttonStyles } from '../constants';

export type Size = 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;

  /**
   * What type to use for
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * How large should the button be? default: 'lg'
   */
  size: Size;

  /**
   * Visual Style of the Button. default: 'primary'
   */
  variant: Variant;

  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean;

  /**
   * If true, the button will be disabled. default: false
   * */
  disabled?: boolean;

  children: React.ReactNode;

  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const defaultButtonStyle = css`
  border-radius: 30px;
  cursor: pointer;
`;

export function Button({
  size = 'lg',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  const activeButtonStyle = useMemo(() => {
    const currentVariantStyles = buttonStyles[variant as Variant] || {};
    return css`
      ${currentVariantStyles.default}
      &:disabled {
        ${currentVariantStyles.disabled}
        cursor: not-allowed;
      }
      &:hover {
        ${currentVariantStyles.hover}
      }
      &:focus-visible {
        ${currentVariantStyles.focus}
      }
      &:active {
        ${currentVariantStyles.click}
      }
    `;
  }, [variant]);

  const buttonSizeStyle = useMemo(
    () => css`
      width: ${fullWidth ? '100%' : `${buttonSize[size].width}px`};
      height: ${buttonSize[size].height}px;
    `,
    [size, fullWidth],
  );

  return (
    <button
      type="button"
      disabled={disabled}
      css={[defaultButtonStyle, buttonSizeStyle, activeButtonStyle]}
      // ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}
// export const ForwardedButton = forwardRef(Button);
