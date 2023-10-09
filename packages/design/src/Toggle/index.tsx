import { forwardRef, InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { svgToDataUrl } from '../../src/utils/svgToDataUrl';
import { ThumbsUp, ThumbsDown } from '../../src/assets/icons';
import { color, gradation } from '../../src/constants';

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({ ...args }, ref) => {
  return <input id={args.id} css={[toggleStyle, toggleSizeStyle]} type="checkbox" ref={ref} {...args} />;
});

const ThumbsUpURL = svgToDataUrl(<ThumbsUp width="18" height="18" color="white" />);
const ThumbsDownURL = svgToDataUrl(<ThumbsDown width="18" height="18" color="_" />);

const toggleSizeStyle = css`
  width: 81px;
  height: 32px;

  ::before {
    width: 26px;
    height: 26px;
  }
`;

const beforeStyle = css`
  &::before {
    content: '';
    position: absolute;
    border-radius: 20px;

    top: 3.1px;
    left: 52px;
    transform: scale(1);
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background: ${gradation.sm};
    content: ${ThumbsUpURL};
  }

  &::after {
    content: 'Best';
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: ${color.gray.gray040};

    text-align: center;

    font-family: 'Pretendard';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

const checkedStyle = css`
  &:checked {
    background: ${color.gray.gray060};
    ::before {
      align-items: flex-end;

      left: 3px;
      background: ${color.gray.gray000};
      content: ${ThumbsDownURL};
    }
    ::after {
      content: 'Worst';
      right: -8px;
      color: ${color.gray.gray000};
    }
  }
`;

const toggleStyle = css`
  position: relative;
  appearance: none;
  outline: none;

  transition: 0.2s;

  border-radius: 20px;
  background: ${color.gray.gray000};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;

  ${beforeStyle}
  ${checkedStyle}

  &:disabled {
    background: #cac9c9;
    ::before {
      background: rgb(250, 250, 250);
    }
  }
`;

export default Toggle;
