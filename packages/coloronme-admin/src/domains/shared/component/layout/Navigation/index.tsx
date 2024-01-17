import { css } from '@emotion/react';
import { HomeOutline, Text, TablerPhotoSensorOutline, Layer, PersonOutline, color } from '@design';

import NaviItem from './NaviItem';
import { useRouter } from 'next/router';

const listStyle = css`
  height: 100%;
  width: 100px;
  margin-top: 15px;
  grid: 1;
`;

const iconBox = css`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export default function Navigation() {
  const { route } = useRouter();
  const mainRoute = route.split('/')[1];

  return (
    <nav
      css={css`
        display: flex;
        position: fixed;
        bottom: 0;
        right: 0;
        justify-content: space-around;
        background: ${color.gray.gray000};
        align-items: center;
        height: 81px;
        width: 100%;
        border-radius: 15px 15px 0 0;
        box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
        list-style: none;
      `}
    >
      <li css={listStyle}>
        <NaviItem route="/">
          <div css={iconBox}>
            <HomeOutline width="25" height="24" color={route === '/' ? 'black' : 'grey'} />
            <Text
              as="body"
              size="md"
              style={css`
                margin: 0;
                color: ${mainRoute === '' ? 'black' : 'grey'};
              `}
            >
              홈
            </Text>
          </div>
        </NaviItem>
      </li>
      <li css={listStyle}>
        <NaviItem route="/register">
          <div css={iconBox}>
            <TablerPhotoSensorOutline width="25" height="24" color={mainRoute === 'register' ? 'black' : 'grey'} />
            <Text
              as="body"
              size="md"
              style={css`
                margin: 0;
                color: ${mainRoute === 'register' ? 'black' : 'grey'};
              `}
            >
              고객 등록
            </Text>
          </div>
        </NaviItem>
      </li>
      <li css={listStyle}>
        <NaviItem route="/colors">
          <div css={iconBox}>
            <Layer width="25" height="24" color={mainRoute === 'colors' ? 'black' : 'grey'} />
            <Text
              as="body"
              size="md"
              style={css`
                margin: 0;
                color: ${mainRoute === 'colors' ? 'black' : 'grey'};
              `}
            >
              퍼스널 컬러
            </Text>
          </div>
        </NaviItem>
      </li>
      <li css={listStyle}>
        <NaviItem route="/mypage">
          <div css={iconBox}>
            <PersonOutline width="25" height="24" color={mainRoute === 'mypage' ? 'black' : 'grey'} />
            <Text
              as="body"
              size="md"
              style={css`
                margin: 0;
                color: ${mainRoute === 'mypage' ? 'black' : 'grey'};
              `}
            >
              마이페이지
            </Text>
          </div>
        </NaviItem>
      </li>
    </nav>
  );
}
