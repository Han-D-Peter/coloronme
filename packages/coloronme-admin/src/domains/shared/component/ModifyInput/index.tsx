import { css } from '@emotion/react';
import { Button } from '../../../../../../design/src/Button';
import { color } from '../../../../../../design/src/constants';
import { useRef, useState } from 'react';
import { useBoolean } from '../../../../../../libs/src/hooks';

interface ModifyInput {
  placeholder: string;
  defaultValue?: string;
  onChangeEnd?: (value: string) => void;
}

const inputStyle = css`
  outline: none;
  border: none;
  width: calc(100% - 20px);
  height: 35px;
  padding-left: 20px;
  border-bottom: 1px solid;
  border-bottom-color: ${color.gray.gray030};
  font-size: 14px;
  font-weight: regular;
`;

export default function ModifyInput({ placeholder, defaultValue, onChangeEnd }: ModifyInput) {
  const [isModifying, turnOn, turnOff] = useBoolean(false);
  const ref = useRef<HTMLInputElement>(null);

  const enabled = css`
    color: ${isModifying ? 'black' : color.gray.gray020};
    ::placeholder {
      color: ${color.gray.gray020};
    }
    :disabled {
      background-color: transparent;
    }
  `;

  const turnOffAfterValidation = () => {
    turnOff();
    if (onChangeEnd && defaultValue !== ref.current?.value) {
      onChangeEnd(ref.current?.value as string);
    }
  };

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: flex-end;
      `}
    >
      <div
        css={css`
          width: 100%;
          margin-right: 12px;
        `}
      >
        <input
          disabled={!isModifying}
          ref={ref}
          defaultValue={defaultValue}
          placeholder={placeholder}
          css={[inputStyle, enabled]}
        />
      </div>
      <div
        css={css`
          min-width: 72px;
          height: 36px;
        `}
      >
        {isModifying ? (
          <Button
            onClick={turnOffAfterValidation}
            variant="primary"
            fullWidth
            css={css`
              height: 36px;
            `}
          >
            저장
          </Button>
        ) : (
          <Button
            onClick={turnOn}
            variant="ghost"
            fullWidth
            css={css`
              height: 36px;
            `}
          >
            변경
          </Button>
        )}
      </div>
    </div>
  );
}
