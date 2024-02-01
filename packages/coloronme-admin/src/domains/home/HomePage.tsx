import { css } from '@emotion/react';
import Period from './Period';
import DateTypeHeader from './DataTypeHeader';
import Result from './Result';
import { useState } from 'react';

export default function HomePage() {
  const [period, setPeriod] = useState({ start: '', end: '' });

  return (
    <section
      css={css`
        margin-top: 22px;
      `}
    >
      <DateTypeHeader />
      <Period onClick={(date) => setPeriod(date)} />
      <Result date={period} />
    </section>
  );
}
