import { css } from '@emotion/react';
import DefaultLayout from '../domains/shared/component/layout/DefaultLayout';
import { Text } from '../../../design/src/text';
import { color } from '../../../design/src/constants';

export default function Colors() {
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
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  봄 웜 라이트
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  봄 웜 클리어
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  봄 웜 스트롱
                </Text>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  여름 쿨 라이트
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  여름 쿨 클리어
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
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
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  가을 웜 뮤트
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  가을 웜 트루
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  가을 웜 딥
                </Text>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  겨울 쿨 스트롱
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
                  겨울 쿨 트루
                </Text>
              </button>
            </div>
            <div>
              <button css={buttonStyle}>
                <Text as="body" size="lg" weight="regular">
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

const buttonStyle = css`
  background-color: ${color.gray.gray010};
  width: 146px;
  height: 36px;
  border: none;
  border-radius: 30px;
  margin-bottom: 14px;
`;
