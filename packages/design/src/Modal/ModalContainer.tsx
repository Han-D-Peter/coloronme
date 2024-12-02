import { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';

const style = {
  top: '50%',
  left: '50%',
  border: 'none',
  backgroundColor: '#fff',
  borderRadius: '15px',
  p: 1,
};

export default function ModalContainer({
  children,
  isOpen,
  onRequestClose,
  sx = {},
}: {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
  sx?: SxProps<Theme>;
}) {
  return (
    <Modal sx={{ backgroundColor: 'transparent', ...sx }} open={isOpen} onClose={onRequestClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
