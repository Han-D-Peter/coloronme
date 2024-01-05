import IconButton from '@/src/domains/shared/component/IconButton';
import DefaultLayout from '@/src/domains/shared/component/layout/DefaultLayout';
import { css } from '@emotion/react';
import Link from 'next/link';
import { BackwardOutline } from '../../../../../design/src/assets/icons/BackwardOutline';
import { Text } from '../../../../../design/src/text';
import Input from '../../../../../design/src/Input';
import { useRef, useState } from 'react';
import { Button } from '../../../../../design/src/Button';
import { useMutationPassword } from '@/src/domains/shared/hooks/queryhooks/common.query';

export default function Password() {
  const originPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const validationPasswordRef = useRef<HTMLInputElement>(null);

  const [validation, setValidation] = useState({ notOk: false, msg: '' });
  const { mutate } = useMutationPassword();

  function validatePassword() {
    if (newPasswordRef.current && validationPasswordRef.current) {
      const originPassword = originPasswordRef.current ? originPasswordRef.current.value : '';
      const newPassword = newPasswordRef.current.value;
      const validationPassword = validationPasswordRef.current.value;
      const passwordRegax = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,20}$');
      const result = passwordRegax.test(newPassword);
      if (!result) {
        setValidation({ notOk: true, msg: '비밀번호 형태가 일치하지 않습니다.' });
        return;
      }
      if (newPassword !== validationPassword) {
        setValidation({ notOk: true, msg: '비밀번호 재입력 정보가 같지 않습니다.' });
        return;
      }

      setValidation({ notOk: false, msg: '' });
      mutate({ newPassword, oldPassword: originPassword, passwordConfirm: newPassword });
    }
  }
  // 검증해서 아니면 error message 부여
  // 새로운 비밀번호와 검증 비밀번호가 일치하는지 확인

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
            <BackwardOutline width="7" height="14" color="black" />
          </Link>
        </div>
        <div
          css={css`
            margin-left: 13px;
          `}
        >
          <Text as="title" size="sm" weight="bold">
            비밀번호 변경
          </Text>
        </div>
      </div>
      <div
        css={css`
          margin-top: 66px;
        `}
      >
        <div>
          <Text as="title" size="xs" weight="bold">
            기존 비밀번호
          </Text>
        </div>
        <div
          css={css`
            width: 100%;
            margin-top: 31px;
          `}
        >
          <Input ref={originPasswordRef} placeholder="기존 비밀번호 입력" />
        </div>
      </div>
      <div
        css={css`
          margin-top: 63px;
        `}
      >
        <div>
          <Text as="title" size="xs" weight="bold">
            새 비밀번호
          </Text>
        </div>
        <div
          css={css`
            margin-top: 31px;
          `}
        >
          <Input
            type="password"
            isInvalid={validation.notOk}
            errorMessage={validation.msg}
            ref={newPasswordRef}
            placeholder="숫자, 특수문자 포함 8~20자 입력"
          />
        </div>
        <div
          css={css`
            margin-top: 22px;
          `}
        >
          <Input type="password" ref={validationPasswordRef} placeholder="비밀번호 재입력" />
        </div>
      </div>
      <div
        css={css`
          margin-top: 198px;
        `}
      >
        <Button fullWidth onClick={validatePassword}>
          비밀번호 변경
        </Button>
      </div>
    </DefaultLayout>
  );
}
