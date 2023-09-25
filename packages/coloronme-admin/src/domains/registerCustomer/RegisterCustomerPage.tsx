import { css } from '@emotion/react';

import { Button, Modal, Text, color } from '@design';
import { Dropdown } from '@design';
import { useBoolean } from '@libs';

export default function RegisterCustomerPage() {
  const [isOpen, open, close] = useBoolean(true);
  return (
    <section
      css={css`
        padding-top: 48px;
      `}
    >
      <div>
        <Text as="title" size="sm" weight="bold">
          진단 결과 공유
        </Text>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 27px;
        `}
      >
        <div
          css={css`
            width: 57px;
            height: 57px;
            background-color: green;
            border-radius: 200px;
          `}
        ></div>
        <div
          css={css`
            margin-left: 15px;
            margin-bottom: 10px;
          `}
        >
          <div>
            <Text as="title" size="sm" weight="bold">
              맹꽁이
            </Text>
          </div>
          <div>
            <Text
              as="body"
              size="sm"
              style={css`
                color: ${color.gray.gray050};
              `}
            >
              abcdefg@naver.com
            </Text>
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-top: 35px;
        `}
      >
        <div>
          <Text as="title" size="xlg" weight="bold">
            진단일
          </Text>
        </div>
        <div
          css={css`
            margin-top: 22px;
          `}
        >
          <Text as="body" size="md">
            2023. 08. 13 12:30
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 42px;
        `}
      >
        <div>
          <Text as="title" size="xlg" weight="bold">
            퍼스널컬러 타입
          </Text>
        </div>
        <div
          css={css`
            margin-top: 18px;
            width: 187px;
          `}
        >
          <Dropdown>
            <Dropdown.Element>봄 브라이트</Dropdown.Element>
            <Dropdown.Element>봄 다크</Dropdown.Element>
            <Dropdown.Element>여름 뮤트</Dropdown.Element>
            <Dropdown.Element>여름 라이트</Dropdown.Element>
            <Dropdown.Element>가을</Dropdown.Element>
            <Dropdown.Element>겨울</Dropdown.Element>
          </Dropdown>
        </div>
      </div>
      <div
        css={css`
          margin-top: 40px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div>
            <Text as="title" size="xlg" weight="bold">
              진단 내용
            </Text>
          </div>
          <div>
            <Button
              size="md"
              variant="secondary"
              css={css`
                width: 87px;
                height: 30px;
                border-radius: 10px;
              `}
              onClick={open}
            >
              작성하기
            </Button>
          </div>
        </div>
        <div
          css={css`
            margin-top: 18px;
            height: 218px;
          `}
        >
          <textarea
            css={css`
              width: 100%;
              height: 100%;
              border: 1px solid ${color.gray.gray020};
              border-radius: 5px;
            `}
          />
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          margin-top: 40px;
          display: flex;
          justify-content: center;
        `}
      >
        <Button variant="primary" size="lg">
          결과 공유하기
        </Button>
      </div>
      <Modal sx={{ display: 'flex', padding: '59px 16px' }} isOpen={isOpen} close={close} open={open}>
        <div
          css={css`
            width: 100%;
            padding: 29px 31px;
          `}
        >
          <div>
            <Text as="title" size="xlg" weight="bold">
              진단 내용 작성
            </Text>
          </div>
          <div
            css={css`
              margin-top: 18px;
            `}
          ></div>
        </div>
      </Modal>
    </section>
  );
}
