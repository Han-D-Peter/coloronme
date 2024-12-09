/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import { Text, TablerPhotoSensorOutline, Button, colorLibrary, Modal } from '@design';
import { OnResultFunction, QrReader } from 'react-qr-reader';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProfileCard from '../shared/component/element/ProfileCard';
import leftArrow from '../../../public/icons/vector/leftArrow.svg';
import { useUsers } from '../shared/hooks/queryhooks/common.query';
import convertDateToSimple from '../shared/utils/convertDateToSimple';
import convertColorNumberToCode from '../shared/utils/convertColorNumberToCode';
import CustomCountDescription from './CustomCountDescription';
import Member from './Member';

export default function RegisterPage() {
  const { data } = useUsers();
  const router = useRouter();
  const [startScan, setStartScan] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const handleScan: OnResultFunction = async (result, error, codeReader) => {
    const qrText = result?.getText();
    if (qrText && qrText !== '') {
      console.log(`loaded >>>`, qrText);
      router.push(`/register/${qrText}`);
    }
  };
  return (
    <>
      <section
        css={css`
          padding: 60px 13px 0 13px;
        `}
      >
        <CustomCountDescription customCount={data?.data ? data.data.length : 0} />
        <div>
          {data?.data?.map((user) => {
            return (
              <div
                onClick={() => setSelectedMemberId(String(user.memberId))}
                key={user.memberId}
                css={css`
                  margin-bottom: 16px;
                `}
              >
                <ProfileCard
                  name={user.nickname}
                  email={user.email}
                  date={convertDateToSimple(user.consultedDate as string)}
                  colorType={user.personalColorType!.personalColorTypeName}
                />
              </div>
            );
          })}
        </div>
      </section>
      {startScan && (
        <div
          css={css`
            padding: 62px 0 0 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            background-color: white;
            position: fixed;
            height: 100vh;
            width: 100vw;
            z-index: 2;
            top: 0;
            left: 0;
          `}
        >
          <div
            onClick={() => setStartScan(false)}
            css={css`
              cursor: pointer;
              display: flex;
              align-items: center;
              width: 100%;
              margin-left: 28px;
            `}
          >
            <div>
              <Image width={7} height={14} src={leftArrow} alt="leftArrow" />
            </div>
            <div
              css={css`
                margin-left: 13px;
              `}
            >
              <Text as="title" size="sm" weight="bold">
                코드 스캔
              </Text>
            </div>
          </div>
          <div>
            <div
              css={css`
                width: 100%;
                text-align: center;
                margin-top: 105px;
              `}
            >
              <Text as="body" size="md" weight="regular">
                회원가입을 마친 고객님의 화면에서
              </Text>
            </div>
            <div
              css={css`
                margin-top: px;
                width: 100%;
                text-align: center;
              `}
            >
              <Text as="body" size="md" weight="regular">
                QR코드를 스캔해주세요
              </Text>
            </div>
          </div>
          <div
            css={css`
              margin-top: 25px;
            `}
          >
            <QrReader
              constraints={{ facingMode: 'environment', aspectRatio: { exact: 1 } }}
              scanDelay={500}
              onResult={handleScan}
              // chooseDeviceId={()=>selected}
              containerStyle={{ width: '100vw', height: '50%' }}
            />
          </div>
          <div
            css={css`
              color: white;
              margin-bottom: 10px;
            `}
          >
            Scanning QR Code...
          </div>
        </div>
      )}
      <div
        css={css`
          display: flex;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 110px;
          width: 100vw;
          justify-content: center;
        `}
      >
        <Button
          css={css`
            border-radius: 25px;
            box-shadow: 0px 3px 4px #0000003e;
          `}
          size="md"
          variant="primary"
          onClick={() => {
            setStartScan(true);
          }}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div>
              <TablerPhotoSensorOutline width="28px" height="28px" color="#fff" />
            </div>
            <div
              css={css`
                margin-left: 5px;
              `}
            >
              <Text
                as="title"
                size="sm"
                weight="bold"
                style={css`
                  margin: 0;
                  padding: 0;
                `}
              >
                등록
              </Text>
            </div>
          </div>
        </Button>
      </div>
      <Modal
        sx={{ padding: '59px 17px', overflow: 'scroll' }}
        isOpen={!!selectedMemberId}
        close={() => setSelectedMemberId(null)}
        open={() => {}}
      >
        {selectedMemberId && <Member memberId={selectedMemberId} onClose={() => setSelectedMemberId(null)} />}
      </Modal>
    </>
  );
}
