import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';

import { Text, Button, color, Dropdown } from '@design';

import { PRODUCT_REPORT_ENTRIES } from '@/src/constants/constants';
import DropdownElement from '../../../../../design/src/Dropdown/components/DropdownElement';
import DefaultModal from '../../Common/Modal';

const modalStyles = {
  content: {
    width: '85vw',
    maxWidth: '340px',
    minHeight: '140px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
    padding: '30px',
    overflow: 'hidden',
  },
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  reportType: string;
  setReportType: (value: string) => void;
  reportMemo: string;
  setReportMemo: Dispatch<SetStateAction<string>>;
  errorMessage?: string;
};

const ReportModal = ({
  isOpen,
  onClose,
  onSubmit,
  reportType,
  setReportType,
  reportMemo,
  setReportMemo,
  errorMessage,
}: Props) => {
  return (
    <DefaultModal style={modalStyles} isOpen={isOpen} ariaHideApp={false}>
      <div css={titleTextContainer}>
        <Text as="title" size="sm" weight="bold">
          상품 신고하기
        </Text>
      </div>

      <div css={innerContentStyle}>
        <Text as="body" size="md">
          신고 사유를 선택해주세요.
        </Text>

        <Dropdown value={reportType} onChange={(e) => setReportType(e)}>
          {PRODUCT_REPORT_ENTRIES.map(([key, value]) => (
            <DropdownElement key={key}>{value}</DropdownElement>
          ))}
        </Dropdown>
      </div>

      <div css={innerContentStyle}>
        <Text as="body" size="md">
          기타 의견
        </Text>
        <textarea
          placeholder="10자 이상"
          value={reportMemo}
          onChange={(e) => setReportMemo(e.target.value)}
          css={textAreaStyle}
        />
      </div>

      <div css={submitAreaStyle}>
        <Text as="caption" size="md" style={errorMessageStyle}>
          {errorMessage}
        </Text>
        <div css={managementButtonContainer}>
          <Button variant="ghost" onClick={onClose}>
            취소
          </Button>
          <Button onClick={onSubmit}>삭제</Button>
        </div>
      </div>
    </DefaultModal>
  );
};

const innerContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const submitAreaStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const titleTextContainer = css`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
`;

const textAreaStyle = css`
  border-radius: 5px;
  border: 1px solid ${color.gray.gray020};
  width: 100%;
  height: 112px;
  padding: 10px;

  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${color.gray.gray020};
  }
`;

const errorMessageStyle = css`
  color: ${color.red.red100};
  height: 12px;
  margin-left: 10px;
`;

const managementButtonContainer = css`
  display: flex;
  gap: 10px;
`;

export default ReportModal;
