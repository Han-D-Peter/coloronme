/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import { Text, TablerPhotoSensorOutline, Button, ForwardOutline } from '@design';
import ProfileCard from '../shared/component/element/ProfileCard';
import { OnResultFunction, QrReader } from 'react-qr-reader';
import { ComponentType, useState } from 'react';
import { useRouter } from 'next/router';
import { relative } from 'path';
import leftArrow from '../../../public/icons/vector/leftArrow.svg';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const [selected, setSelected] = useState('environment');
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState('');

  const handleScan: OnResultFunction = async (result, error, codeReader) => {
    setLoadingScan(true);
    const qrText = result?.getText();
    if (qrText && qrText !== '') {
      console.log(`loaded >>>`, qrText);
      setData(qrText);
      router.push('/register/asdfasdfasdf');
      // setPrecScan(scanData);
    }
  };
  return (
    <>
      <section
        css={css`
          padding: 60px 13px 0 13px;
        `}
      >
        <div>
          <Text as="title" size="sm" weight="bold">
            고객등록
          </Text>
        </div>
        <div
          css={css`
            margin-top: 44px;
          `}
        >
          <Text as="title" size="xs" weight="bold">
            Today
          </Text>
        </div>
        <div
          css={css`
            margin-top: 19px;
          `}
        >
          <Text
            as="body"
            size="md"
            style={css`
              margin-bottom: 0;
            `}
          >
            컬러온미를 통해
          </Text>
          <div
            css={css`
              display: flex;
              align-items: center;
              margin-bottom: 26px;
            `}
          >
            <Text
              as="body"
              size="md"
              weight="bold"
              style={css`
                margin: 0;
                padding: 0;
              `}
            >
              4명
            </Text>
            <Text
              as="body"
              size="md"
              style={css`
                margin: 0;
                padding: 0;
              `}
            >
              의 고객에게 진단 결과를 공유했어요
            </Text>
          </div>
        </div>
        <div>
          <div
            css={css`
              margin-bottom: 16px;
            `}
          >
            <ProfileCard name="맹꽁이" email="asdf@naver.com" date="2023. 08. 13" colorType="여름 쿨 라이트" />
          </div>
          <div
            css={css`
              margin-bottom: 16px;
            `}
          >
            <ProfileCard name="맹꽁이" email="asdf@naver.com" date="2023. 08. 13" colorType="여름 쿨 라이트" />
          </div>
          <div
            css={css`
              margin-bottom: 16px;
            `}
          >
            <ProfileCard name="맹꽁이" email="asdf@naver.com" date="2023. 08. 13" colorType="여름 쿨 라이트" />
          </div>
          <div
            css={css`
              margin-bottom: 16px;
            `}
          >
            <ProfileCard name="맹꽁이" email="asdf@naver.com" date="2023. 08. 13" colorType="여름 쿨 라이트" />
          </div>
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
              <Text as="title" size="xs" weight="bold">
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
                size="xs"
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
    </>
  );
}
