/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import { Button, Modal, Text, color, Dropdown } from '@design';
import { useBoolean } from '@libs';
import Canvas from '../shared/component/Canvas';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutateUser, useUserByQR } from '../shared/hooks/queryhooks/common.query';
import { PERSONAL_COLOR_MAPPING } from '../shared/constants/constants';

function convertIdFromStringName(keyword: string) {
  let index = 1;

  Object.entries(PERSONAL_COLOR_MAPPING).forEach(([key, value]) => {
    if (keyword === value.string) {
      index = Number(key);
    }
  });
  return index;
}

export default function RegisterCustomerPage() {
  const router = useRouter();
  const qrId = router.query.id! as string;
  const { mutate } = useMutateUser();

  const { data, isLoading } = useUserByQR(qrId);
  const [isOpen, open, close] = useBoolean(false);
  const [canvasObj, setCanvasObj] = useState<string>('');

  const [personalId, setPersonalId] = useState(1);
  const [diagnosisText, setDiagnosisText] = useState('');

  useEffect(() => {
    if (data?.data) {
      setPersonalId(data?.data?.personalColorId);
      setCanvasObj(data?.data?.consultedDrawing);
      setDiagnosisText(data?.data?.consultedContent);
    }
  }, [data]);

  const onSubmit = () => {
    if (!data?.data) return;

    mutate(
      {
        userId: data.data.memberId.toString(),
        personalColorId: personalId,
        consultedContent: diagnosisText,
        consultedDrawing: canvasObj,
        consultedDate: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          console.log('success');
        },
      },
    );
  };

  if (isLoading || !data?.data) return <div>...Loading</div>;
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
              {data.data.nickname}
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
              {data.data.email}
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
          <Text as="title" size="lg" weight="bold">
            진단일
          </Text>
        </div>
        <div
          css={css`
            margin-top: 20px;
          `}
        >
          <Text as="body" size="md">
            {data.data.consultedDate || '진단 전'}
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 42px;
        `}
      >
        <div>
          <Text as="title" size="lg" weight="bold">
            퍼스널컬러 타입
          </Text>
        </div>
        <div
          css={css`
            margin-top: 18px;
            width: 187px;
          `}
        >
          <Dropdown
            value={PERSONAL_COLOR_MAPPING[data.data.personalColorId as keyof typeof PERSONAL_COLOR_MAPPING].string}
            placeholder="타입을 선택해 주세요"
            onChange={(value) => {
              const changeTargetId = convertIdFromStringName(value);
              setPersonalId(changeTargetId);
            }}
          >
            {Object.values(PERSONAL_COLOR_MAPPING).map((item) => (
              <Dropdown.Element key={item.code}>{item.string}</Dropdown.Element>
            ))}
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
            <Text as="title" size="lg" weight="bold">
              진단 내용
            </Text>
          </div>
        </div>
        <div
          css={css`
            position: relative;
            margin-top: 18px;
            height: 218px;
            padding: 0;
          `}
        >
          <textarea
            placeholder="* 진단 내용을 입력해주세요."
            value={diagnosisText}
            onChange={(e) => {
              setDiagnosisText(e.target.value);
            }}
            css={css`
              height: calc(100% - 32px);
              width: calc(100% - 32px);
              border: 1px solid ${color.gray.gray020};
              border-radius: 5px;
              padding: 16px;
              &::placeholder {
                font-size: 14px;
                font-weight: 400;
                font-family: pretendard;
              }
            `}
          />
          <div
            css={css`
              position: absolute;
              right: 16px;
              bottom: 16px;
            `}
          >
            <button
              css={css`
                background: white;
                border: 0;
                width: 40px;
                height: 40px;
                border-radius: 100px;
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
              `}
              onClick={open}
            >
              <img src="/icons/vector/pencil.svg" alt="pencil" width={20} height={20} />
            </button>
          </div>
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
        <Button variant="primary" size="lg" onClick={onSubmit}>
          결과 공유하기
        </Button>
      </div>
      <Modal sx={{ display: 'flex', padding: '59px 16px' }} isOpen={isOpen} close={close} open={open}>
        <div
          css={css`
            padding: 29px 31px;
          `}
        >
          <div>
            <Text as="title" size="lg" weight="bold">
              진단 내용 작성
            </Text>
          </div>
          <div
            css={css`
              margin-top: 18px;
            `}
          >
            <Canvas
              value={canvasObj}
              onChange={(e) => {
                setCanvasObj(JSON.stringify(e));
              }}
            />
          </div>
          <div
            css={css`
              width: 100%;
              margin-top: 26px;
              display: flex;
              justify-content: space-between;
            `}
          >
            <Button
              onClick={() => {
                setCanvasObj('');
                close();
              }}
              variant="ghost"
              size="md"
            >
              취소
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                close();
              }}
            >
              저장
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
