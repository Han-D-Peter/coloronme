import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';

import { Text, Button, color, Dropdown } from '@design';

import { COMMENT_REPORT_ENTRIES } from '@/src/constants/constants';
import DefaultModal from '@/src/components/Common/Modal';
import DropdownElement from '../../../../../../design/src/Dropdown/components/DropdownElement';

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
  comment: string;
  nickname: string;
};

const CommentReportModal = ({
  isOpen,
  onClose,
  onSubmit,
  reportType,
  setReportType,
  reportMemo,
  setReportMemo,
  errorMessage,
  comment,
  nickname,
}: Props) => {
  return (
    <DefaultModal style={modalStyles} isOpen={isOpen} ariaHideApp={false}>
      <div css={titleTextContainer}>
        <Text as="title" size="sm" weight="bold">
          댓글 신고하기
        </Text>
      </div>

      <div css={innerContentStyle}>
        <div css={flexContainerStyle}>
          <Text as="body" size="md" weight="bold" style={authorTextStyle}>
            작성자
          </Text>

          <Text as="body" size="md">
            {nickname}
          </Text>
        </div>
        <div css={flexContainerWithLargerGapStyle}>
          <Text as="body" size="md" weight="bold" style={authorTextStyle}>
            내용
          </Text>
          <Text as="body" size="md" style={commentTextStyle}>
            {comment}
          </Text>
        </div>
      </div>

      <div css={innerContentStyle}>
        <Text as="body" size="md">
          신고 사유를 선택해주세요.
        </Text>

        <Dropdown value={reportType} onChange={(e) => setReportType(e)}>
          {COMMENT_REPORT_ENTRIES.map(([key, value]) => (
            <DropdownElement key={key}>{value}</DropdownElement>
          ))}
        </Dropdown>
      </div>

      <div css={innerContentStyle}>
        <div css={etcTextContainer}>
          <Text as="body" size="md">
            기타 의견
          </Text>
          <Text as="body" size="md" style={gray30FontStyle}>
            (선택)
          </Text>
        </div>

        <textarea
          placeholder="500자 이내"
          value={reportMemo}
          onChange={(e) => setReportMemo(e.target.value)}
          css={textAreaStyle}
          maxLength={500}
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
          <Button onClick={onSubmit}>신고</Button>
        </div>
      </div>
    </DefaultModal>
  );
};

const commentTextStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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

const flexContainerStyle = css`
  display: flex;
  gap: 8px;
`;

const flexContainerWithLargerGapStyle = css`
  display: flex;
  gap: 21px;
`;

const authorTextStyle = css`
  white-space: nowrap;
  color: ${color.gray.gray030};
`;

const etcTextContainer = css`
  display: flex;
  gap: 2px;
`;

const gray30FontStyle = css`
  color: ${color.gray.gray030};
`;

const textAreaStyle = css`
  border-radius: 5px;
  border: 1px solid ${color.gray.gray020};
  width: 100%;
  height: 100px;
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

export default CommentReportModal;
