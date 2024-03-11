import { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import Sheet from 'react-modal-sheet';
import { mobileStyle } from '@/src/style/SharedStyles';

interface BottomSheetProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
}

const BottomSheet = ({ isOpen, close, children }: BottomSheetProps) => {
  return (
    <Sheet snapPoints={[500]} isOpen={isOpen} onClose={close} css={sheetStyle}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content css={contentStyle}>
          <Sheet.Scroller>{children}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={close} />
    </Sheet>
  );
};

const sheetStyle = css`
  background: rgba(84, 84, 84, 0.8);
  backdrop-filter: blur(2px);
  ${mobileStyle}
`;

const contentStyle = css`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export default BottomSheet;
