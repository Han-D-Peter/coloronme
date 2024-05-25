import { useBooleanState } from '@/src/hooks/useBooleanState';
import { css } from '@emotion/react';

import { color, PlusOutline } from '@design';

import { useOnClickOutside } from '@/src/hooks/useOnClickOutside';
import SelectColorButton from '../../../Component/SelectColorButton';
import RemovableSelectColor from '../RemovableSelectColor';
import { ProductDispatch } from '../Reducer/productReducer';
import { ErrorDispatch } from '../Reducer/productErrorReducer';
import ColorPickerModal from '../ColorPickerModal';
import FormSection from '../FormSection';

type Props = {
  selectColors: string[];
  recommendColors: string[];
  productName: string;
  dispatch: ProductDispatch;
  errorMessage: string;
  dispatchError: ErrorDispatch;
};

const ColorSelection = ({ selectColors, recommendColors, dispatch, dispatchError, errorMessage }: Props) => {
  const [isShownColorPicker, _, onCloseColorPicker, onToggleColorPicker] = useBooleanState(false);
  const colorPickerRef = useOnClickOutside(onCloseColorPicker);

  const addColor = (color: string) => {
    dispatchError({ type: 'SET_COLOR_PICKER_ERROR_MESSAGE', payload: '' });

    if (selectColors.length >= 3) {
      return dispatchError({ type: 'SET_COLOR_PICKER_ERROR_MESSAGE', payload: '색상은 3개까지 선택이 가능합니다.' });
    }
    if (selectColors.includes(color)) {
      return dispatchError({ type: 'SET_COLOR_PICKER_ERROR_MESSAGE', payload: '이미 선택된 색상입니다.' });
    }
    dispatch({ type: 'ADD_COLOR', payload: color });
    onCloseColorPicker();
  };

  return (
    <FormSection title="상품 컬러">
      <div ref={colorPickerRef} css={colorBoxContainer}>
        {isShownColorPicker && (
          <ColorPickerModal
            colors={recommendColors}
            errorMessage={errorMessage}
            onClose={onCloseColorPicker}
            onSubmit={addColor}
          />
        )}
        <SelectColorButton color={color.gray.gray010} onClick={onToggleColorPicker}>
          <PlusOutline width="20" height="20" color={color.gray.gray040} />
        </SelectColorButton>
        {selectColors.map((color) => (
          <RemovableSelectColor
            key={color}
            color={color}
            onRemove={() => dispatch({ type: 'REMOVE_COLOR', payload: color })}
          />
        ))}
      </div>
    </FormSection>
  );
};

const colorBoxContainer = css`
  position: relative;
  display: flex;
  gap: 10px;
`;

export default ColorSelection;
