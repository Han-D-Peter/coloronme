import { css } from '@emotion/react';

import { CircleMinusIcon } from '@design';

import SelectColorButton from '../../Component/SelectColorButton';

type Props = {
  color: string;
  onRemove: (color: string) => void;
};

const RemovableSelectColor = ({ color, onRemove }: Props) => {
  return (
    <SelectColorButton color={color} key={color} style={colorButtonStyle}>
      <div css={removeButtonStyle} onClick={() => onRemove(color)}>
        <CircleMinusIcon width="16" height="16" color="#1B1B1B" />
      </div>
    </SelectColorButton>
  );
};

const colorButtonStyle = css`
  position: relative;
`;

const removeButtonStyle = css`
  position: absolute;
  right: 0;
  top: 0;
`;

export default RemovableSelectColor;
