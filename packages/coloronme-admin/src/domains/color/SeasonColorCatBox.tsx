import { css } from '@emotion/react';
import { Downward, Pencil, Trash } from '../../../../design/src/assets';
import { Text } from '../../../../design/src/text';
import { CustomColorType, Seasons } from '../shared/hooks/queryhooks/color/color.type';
import { useBoolean } from '../../../../libs/src/hooks';
import Input from '../../../../design/src/Input';
import { color } from '../../../../design/src/constants';
import { SEASONS } from '../shared/constants/color';
import Button from '../../../../design/src/Button';
import IconButton from '../shared/component/IconButton';
import { useRemoveColorType } from '../shared/hooks/queryhooks/color/color.query';
import { Modal } from '@design';
import RegistrationColorModal from './RegistrationColorModal';
import { useState } from 'react';
import ModifyingColorModal from './ModifyingColorModal';

interface SeasonColorCatBox {
  season: Seasons;
  colors: CustomColorType[];
}

export default function SeasonColorCatBox({ season, colors }: SeasonColorCatBox) {
  const [isShown, open, close, toggle] = useBoolean(false);
  const [isAddModalShown, openAddModal, closeAddModal] = useBoolean(false);
  const [isModifyModalShown, openModifyModal, closeModifyModal] = useBoolean(false);
  const [modifyingTargetGroup, setModifyingTargetGroup] = useState<CustomColorType | null>(null);
  const { mutate } = useRemoveColorType();

  return (
    <>
      <div>
        <div
          onClick={toggle}
          css={css`
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 11px;
          `}
        >
          <div>
            <Text as="body" size="md" weight="bold">
              {SEASONS[season]}
            </Text>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              ${isShown && 'transform: rotate(180deg)'};
            `}
          >
            <Downward height="15" width="15" color="black" />
          </div>
        </div>
        {isShown ? (
          <div>
            <div>
              {colors?.map((color) => {
                return (
                  <ColorCatRow
                    key={color.personalColorTypeId}
                    disabled
                    name={color.personalColorTypeName}
                    onModify={() => {
                      setModifyingTargetGroup(color);
                      openModifyModal();
                    }}
                    onDelete={() => mutate(color.personalColorTypeId)}
                  />
                );
              })}
            </div>
            <div>
              <Button
                onClick={openAddModal}
                style={css`
                  width: 100%;
                  margin-top: 15px;
                `}
                size="sm"
                variant="gray"
              >
                +
              </Button>
            </div>
          </div>
        ) : (
          <div
            css={css`
              width: 100%;
              height: 1px;
              background-color: ${color.gray.gray020};
            `}
          ></div>
        )}
      </div>
      <RegistrationColorModal season={season} isOpen={isAddModalShown} close={closeAddModal} open={openAddModal} />
      <ModifyingColorModal
        colorGroup={modifyingTargetGroup}
        season={season}
        isOpen={isModifyModalShown}
        close={closeModifyModal}
        open={openModifyModal}
      />
    </>
  );
}

interface ColorCatRow {
  disabled?: boolean;
  name?: string;
  onModify: () => void;
  onDelete: () => void;
}

function ColorCatRow({ disabled = false, name, onModify, onDelete }: ColorCatRow) {
  return (
    <>
      <div
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 100%;
            margin-right: 26px;
          `}
        >
          <Input value={name} disabled={disabled} />
        </div>
        <div
          css={css`
            display: flex;
            gap: 5px;
            margin-bottom: -10px;
          `}
        >
          <IconButton onClick={onModify}>
            <Pencil width="15px" height="15px" color={color.gray.gray030} />
          </IconButton>
          <IconButton onClick={onDelete}>
            <Trash width="15px" height="15px" color={color.gray.gray030} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
