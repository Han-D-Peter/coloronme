import { ButtonHTMLAttributes, forwardRef, useMemo, ReactNode, ForwardedRef } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import { buttonRadiusSize, buttonSize, buttonStyles } from '../constants';

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'ghost' | 'gray';
type RadiusStyle = 'sm' | 'md';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;

  /**
   * What type to use for
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * How large should the button be? default: 'lg'
   */
  size?: Size;

  /**
   * Visual Style of the Button. default: 'primary'
   */
  variant?: Variant;

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

  style?: SerializedStyles;

  radius?: RadiusStyle;
};

const defaultButtonStyle = css`
  border-radius: 30px;
  cursor: pointer;
`;

export default function Button({
  size = 'lg',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  radius = 'md',
  style,
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

  const buttonRadiusStyle = useMemo(
    () => css`
      border-radius: ${buttonRadiusSize[radius]}px;
    `,
    [radius],
  );

  return (
    <button
      type="button"
      disabled={disabled}
      css={[defaultButtonStyle, buttonSizeStyle, activeButtonStyle, buttonRadiusStyle, style]}
      // ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}
// export const ForwardedButton = forwardRef(Button);
