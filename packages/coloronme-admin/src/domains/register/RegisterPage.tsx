import { css } from '@emotion/react';
import { Text, TablerPhotoSensorOutline, Button } from '@design';
import ProfileCard from '../shared/component/element/ProfileCard';
import { OnResultFunction, QrReader } from 'react-qr-reader';
import { useState } from 'react';

export default function RegisterPage() {
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
      setStartScan(false);
      setLoadingScan(false);
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
        <div
          css={css`
            position: fixed;
            left: 125px;
            border-radius: 25px;
            box-shadow: 0px 3px 4px #0000003e;
          `}
        >
          <button
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
          </button>
        </div>
      </section>
      {startScan && (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: black;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          `}
        >
          <QrReader
            constraints={{ facingMode: 'user' }}
            scanDelay={500}
            onResult={handleScan}
            // chooseDeviceId={()=>selected}

            containerStyle={{ position: 'absolute', width: '100%', height: '100%' }}
          />
          <div
            css={css`
              color: white;
              margin-bottom: 10px;
            `}
          >
            Scanning QR Code...
          </div>
          <button
            css={css`
              z-index: 1000;
            `}
            onClick={() => {
              setStartScan(false);
            }}
          >
            cancel
          </button>
        </div>
      )}
    </>
  );
}
