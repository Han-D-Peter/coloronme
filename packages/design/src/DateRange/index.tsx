import { css } from '@emotion/react';
import { color } from '../constants';
import { ChangeEvent, useState } from 'react';
import { kstFormat, isEqualOrAfter, isEqualOrBefore } from '@toss/date';
import { Text } from '../text';

interface DateRange {
  onClick: (date: { start: string; end: string }) => void;
}

export default function DateRange({ onClick }: DateRange) {
  const [startDate, setStartDate] = useState(kstFormat(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(kstFormat(new Date(), 'yyyy-MM-dd'));

  function onStartDateChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedDate = event.target.value;
    if (isEqualOrAfter(new Date(selectedDate), new Date(endDate))) {
      setEndDate(selectedDate);
    }
    setStartDate(selectedDate);
  }
  function onEndDateChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedDate = event.target.value;
    if (isEqualOrBefore(new Date(selectedDate), new Date(startDate))) {
      return alert('시작 날짜보다 앞설 수 없습니다.');
    }
    setEndDate(selectedDate);
  }

  function beforeOneWeek() {
    const currentDate = new Date();
    const oneWeekAgo = new Date().setDate(currentDate.getDate() - 7);
    setEndDate(kstFormat(currentDate, 'yyyy-MM-dd'));
    setStartDate(kstFormat(oneWeekAgo, 'yyyy-MM-dd'));
  }

  function beforeOneMonth() {
    const currentDate = new Date();
    const oneWeekAgo = new Date().setMonth(currentDate.getMonth() - 1);
    setEndDate(kstFormat(currentDate, 'yyyy-MM-dd'));
    setStartDate(kstFormat(oneWeekAgo, 'yyyy-MM-dd'));
  }

  function callback() {
    onClick({ start: startDate, end: endDate });
  }
  return (
    <div>
      <div>
        <input
          css={css`
            width: calc(37% - 8px);
            padding-left: 8px;
            height: 24px;
            font-size: 11px;
            font-family: pretendard;
            border: 1px solid ${color.gray.gray040};
            border-radius: 5px;
            outline: none;
          `}
          onChange={onStartDateChange}
          value={startDate}
          type="date"
        />
        <span
          css={css`
            font-weight: 800;
            margin-left: 8px;
            margin-right: 8px;
          `}
        >
          ~
        </span>
        <input
          css={css`
            width: calc(37% - 8px);
            padding-left: 8px;
            height: 24px;
            font-size: 11px;
            font-family: pretendard;
            border: 1px solid ${color.gray.gray040};
            border-radius: 5px;
            outline: none;
          `}
          type="date"
          onChange={onEndDateChange}
          value={endDate}
        />
        <button
          css={css`
            margin-left: 8px;
            width: 34px;
            height: 24px;
            border-radius: 5px;
            border: none;
            background-color: ${color.gray.gray040};
          `}
          onClick={callback}
        >
          <Text as="body" size="sm">
            조회
          </Text>
        </button>
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 4px;
          gap: 6px;
        `}
      >
        <div>
          <button
            css={css`
              width: 47px;
              height: 22px;
              border-radius: 5px;
              background-color: transparent;
              border: 1px solid ${color.gray.gray040};
              display: flex;
              justify-content: center;
              align-items: center;
            `}
            onClick={beforeOneWeek}
          >
            <Text as="caption" size="md">
              1주일
            </Text>
          </button>
        </div>
        <div>
          <button
            css={css`
              width: 47px;
              height: 22px;
              border-radius: 5px;
              background-color: transparent;
              border: 1px solid ${color.gray.gray040};
              display: flex;
              justify-content: center;
              align-items: center;
            `}
            onClick={beforeOneMonth}
          >
            <Text as="caption" size="md">
              1개월
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
}
