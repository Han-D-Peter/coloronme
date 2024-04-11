import { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import Sheet from 'react-modal-sheet';
import { mobileStyle } from '@/src/style/SharedStyles';

interface BottomSheetProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  snapPoints?: number;
  close: () => void;
  children?: ReactNode;
}
const SheetContainer = Sheet as any;

const BottomSheet = ({ isOpen, close, snapPoints = 500, children }: BottomSheetProps) => {
  return (
    <Sheet snapPoints={[snapPoints]} isOpen={isOpen} onClose={close} css={sheetStyle} disableScrollLocking={true}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content css={contentStyle}>
          <Sheet.Scroller>{children}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <SheetContainer.Backdrop onClick={close} />
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
