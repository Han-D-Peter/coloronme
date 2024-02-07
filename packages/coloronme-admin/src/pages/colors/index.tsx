import { css } from '@emotion/react';
import DefaultLayout from '../../domains/shared/component/layout/DefaultLayout';
import { color, colorLibrary, Text } from '@design';
import { useRouter } from 'next/router';

function markableButtonColor({
  backColor = { r: 244, g: 244, b: 244 },
  fontColor = 'black',
}: {
  backColor?: { r: number; g: number; b: number };
  fontColor?: string;
}) {
  return css`
    background-color: rgb(${backColor.r}, ${backColor.g}, ${backColor.b});
    color: ${fontColor};
    width: 146px;
    height: 36px;
    border: none;
    border-radius: 30px;
    margin-bottom: 14px;
  `;
}

export default function Colors() {
  const router = useRouter();

  function routeToColorDetail(path: string) {
    router.push(`/colors/${path}`);
  }

  return (
    <DefaultLayout>
      <section
        css={css`
          margin-top: 130px;
        `}
      >
        <div>
          <Text as="title" size="lg" weight="bold">
            퍼스널컬러
          </Text>
          <Text as="title" size="lg" weight="regular">
            를
          </Text>
        </div>
        <div>
          <Text as="title" size="lg" weight="regular">
            선택해주세요 ✍
          </Text>
        </div>
      </section>
      <section
        css={css`
          margin-top: 30px;
        `}
      >
        <div>
          <Text
            as="body"
            size="md"
            weight="regular"
            style={css`
              color: ${color.gray.gray040};
            `}
          >
            실제 진단 결과로 활용되는
          </Text>
        </div>
        <div>
          <Text
            as="body"
            size="md"
            weight="regular"
            style={css`
              color: ${color.gray.gray040};
            `}
          >
            퍼스널컬러의 정보를 확인할 수 있습니다 :-)
          </Text>
        </div>
      </section>
      <section
        css={css`
          margin-top: 66px;
        `}
      >
        {/* constants로 정리하자 */}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div>
            <div>
              <button
                onClick={() => routeToColorDetail('sw_lg')}
                css={markableButtonColor({ backColor: colorLibrary.sw_lg.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  봄 웜 라이트
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('sw_cl')}
                css={markableButtonColor({ backColor: colorLibrary.sw_cl.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  봄 웜 클리어
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('sw_st')}
                css={markableButtonColor({ backColor: colorLibrary.sw_st.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  봄 웜 스트롱
                </Text>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={() => routeToColorDetail('sc_lg')}
                css={markableButtonColor({ backColor: colorLibrary.sc_lg.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  여름 쿨 라이트
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('sc_cl')}
                css={markableButtonColor({ backColor: colorLibrary.sc_cl.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  여름 쿨 클리어
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('sc_mt')}
                css={markableButtonColor({ backColor: colorLibrary.sc_mt.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  여름 쿨 뮤트
                </Text>
              </button>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            margin-top: 28px;
            justify-content: space-between;
          `}
        >
          <div>
            <div>
              <button
                onClick={() => routeToColorDetail('fw_mt')}
                css={markableButtonColor({ backColor: colorLibrary.fw_mt.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  가을 웜 뮤트
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('fw_st')}
                css={markableButtonColor({ backColor: colorLibrary.fw_st.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  가을 웜 트루
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('fw_dp')}
                css={markableButtonColor({ backColor: colorLibrary.fw_dp.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  가을 웜 딥
                </Text>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={() => routeToColorDetail('wc_br')}
                css={markableButtonColor({ backColor: colorLibrary.wc_br.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  겨울 쿨 스트롱
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('wc_tr')}
                css={markableButtonColor({ backColor: colorLibrary.wc_tr.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  겨울 쿨 트루
                </Text>
              </button>
            </div>
            <div>
              <button
                onClick={() => routeToColorDetail('wc_dp')}
                css={markableButtonColor({ backColor: colorLibrary.wc_dp.iconColor.code })}
              >
                <Text as="body" size="md" weight="regular">
                  겨울 쿨 딥
                </Text>
              </button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
