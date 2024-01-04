import IconButton from '@/src/domains/shared/component/IconButton';
import ModifyInput from '@/src/domains/shared/component/ModifyInput';
import DefaultLayout from '@/src/domains/shared/component/layout/DefaultLayout';
import { BackwardOutline } from '../../../../../design/src/assets/icons/BackwardOutline';
import { Text } from '../../../../../design/src/text';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMe, useMutationMe } from '@/src/domains/shared/hooks/queryhooks/common.query';

export default function Modify() {
  const { data, isLoading } = useMe();
  const { mutate } = useMutationMe();

  function mutateMe(key: string, value: string) {
    mutate({ [key]: value });
  }

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Error...</div>;

  return (
    <DefaultLayout>
      <div
        css={css`
          margin-top: 46px;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            margin-top: 2px;
          `}
        >
          <Link href="/mypage">
            <IconButton>
              <BackwardOutline width="7" height="14" color="black" />
            </IconButton>
          </Link>
        </div>
        <div>
          <Text as="title" size="sm" weight="bold">
            마이페이지 수정
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 66px;
        `}
      >
        <div>이름</div>
        <div
          css={css`
            margin-top: 18px;
          `}
        >
          <ModifyInput
            placeholder="내용을 입력하세요."
            defaultValue={data.data?.name}
            onChangeEnd={(value) => {
              mutateMe('name', value);
            }}
          />
        </div>
      </div>
      <div
        css={css`
          margin-top: 44px;
        `}
      >
        <div>업체명</div>
        <div
          css={css`
            margin-top: 18px;
          `}
        >
          <ModifyInput
            placeholder="내용을 입력하세요."
            defaultValue={data.data?.company}
            onChangeEnd={(value) => {
              mutateMe('company', value);
            }}
          />
        </div>
      </div>
      <div
        css={css`
          margin-top: 44px;
        `}
      >
        <div>이메일</div>
        <div
          css={css`
            margin-top: 18px;
          `}
        >
          <ModifyInput
            placeholder="내용을 입력하세요."
            defaultValue={data.data?.email}
            onChangeEnd={(value) => {
              mutateMe('email', value);
            }}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
