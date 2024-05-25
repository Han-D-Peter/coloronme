import { css } from '@emotion/react';

import { PERSONAL_COLOR_MAPPING } from '@/src/constants/constants';
import ColorSelectTitle from '../Title/ColorSelectTitle';
import SelectableButton from '../SelectableButton';
import { ProductDispatch } from '../Reducer/productReducer';
import FormSection from '../FormSection';

type Props = {
  dispatch: ProductDispatch;
  personalColorId: number;
};

const PersonalColorSelection = ({ dispatch, personalColorId }: Props) => {
  return (
    <FormSection title={<ColorSelectTitle />}>
      <div css={colorButtonContainerStyle}>
        {Object.entries(PERSONAL_COLOR_MAPPING).map(([id, { code, name }]) => (
          <SelectableButton
            key={id}
            id={id}
            isSelected={personalColorId === +id}
            onClick={() => dispatch({ type: 'SET_PERSONAL_COLOR_ID', payload: +id })}
          >
            {name}
          </SelectableButton>
        ))}
      </div>
    </FormSection>
  );
};

const colorButtonContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export default PersonalColorSelection;
