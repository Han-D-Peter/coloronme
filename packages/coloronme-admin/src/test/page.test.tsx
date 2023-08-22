import { render, screen } from '@testing-library/react';
import Page from '@/src/pages/index';

describe('predict page', () => {
  it('이건 프레딕트 글자가 잘 나오는지 체크', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
