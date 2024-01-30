import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ColorLibrary, color, colorLibrary } from '../../../../../design/src/constants';
import { Text } from '../../../../../design/src/text';
import Tag from '@/src/domains/shared/component/Tag';
import ColorProfile from '@/src/domains/shared/component/ColorProfile';
import DefaultLayout from '@/src/domains/shared/component/layout/DefaultLayout';

const transparentBtnStyle = css`
  background-color: transparent;
  border: none;
`;

export default function ColorDetail() {
  const router = useRouter();
  const colorFromPath = router.query.color as keyof ColorLibrary;

  const colorKeys = Object.keys(colorLibrary) as (keyof ColorLibrary)[];

  const currentIndex = colorKeys.indexOf(colorFromPath);

  function nextColor() {
    const nextIndex = currentIndex + 1;
    if (nextIndex === colorKeys.length) {
      router.push(`/colors/${colorKeys[0]}`);
    } else {
      router.push(`/colors/${colorKeys[nextIndex]}`);
    }
  }

  function prevColor() {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      router.push(`/colors/${colorKeys[colorKeys.length - 1]}`);
    } else {
      router.push(`/colors/${colorKeys[prevIndex]}`);
    }
  }

  if (!colorFromPath || !colorLibrary[colorFromPath]) {
    return <h1>존재하지 않는 경로 입니다.</h1>;
  }

  return (
    <DefaultLayout>
      <main>
        <section
          css={css`
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              margin-right: 13px;
            `}
          >
            <button onClick={prevColor} css={transparentBtnStyle}>
              <div
                css={css`
                  width: 0;
                  height: 0;
                  border-top: 6px solid transparent;
                  border-right: 8px solid ${color.gray.gray020};
                  border-bottom: 6px solid transparent;
                `}
              ></div>
            </button>
          </div>
          <div>
            <Text as="title" size="sm">
              {colorLibrary[colorFromPath].name}
            </Text>
          </div>
          <div
            css={css`
              margin-left: 13px;
            `}
          >
            <button onClick={nextColor} css={transparentBtnStyle}>
              <div
                css={css`
                  width: 0;
                  height: 0;
                  border-top: 6px solid transparent;
                  border-left: 8px solid ${color.gray.gray020};
                  border-bottom: 6px solid transparent;
                `}
              ></div>
            </button>
          </div>
        </section>
        <section
          css={css`
            margin-top: 30px;
            padding-left: 28px;
            padding-right: 28px;
            display: flex;
            justify-content: space-between;
          `}
        >
          {colorLibrary[colorFromPath].tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </section>
        <section
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 31px;
            padding-left: 14px;
            padding-right: 14px;
          `}
        >
          <div
            css={css`
              width: 130px;
            `}
          >
            <div
              css={css`
                margin-bottom: 18px;
              `}
            >
              <Text as="title" size="sm">
                베스트 컬러
              </Text>
            </div>
            {Object.values(colorLibrary[colorFromPath].best).map((item) => {
              return (
                <div
                  key={item.name}
                  css={css`
                    margin-top: 21px;
                  `}
                >
                  <ColorProfile name={item.name} code={{ r: item.r, g: item.g, b: item.b }} />
                </div>
              );
            })}
          </div>
          <div
            css={css`
              width: 130px;
            `}
          >
            <div>
              <Text as="title" size="sm">
                워스트 컬러
              </Text>
            </div>
            {Object.values(colorLibrary[colorFromPath].worst.color).map((item) => {
              return (
                <div
                  key={item.name}
                  css={css`
                    margin-top: 21px;
                  `}
                >
                  <ColorProfile name={item.name} code={{ r: item.r, g: item.g, b: item.b }} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}

export function getStaticPaths() {
  const colorKeys = Object.keys(colorLibrary) as (keyof ColorLibrary)[];
  return {
    paths: colorKeys.map((color) => ({
      params: { color },
    })),
    fallback: true,
  };
}

export function getStaticProps() {
  return { props: {} };
}
