import { ReactNode } from 'react';
import IconButton from '../../element/IconButton';
import { useRouter } from 'next/router';

interface NaviItemProps {
  children: ReactNode;
  route: string;
}

export default function NaviItem({ children, route }: NaviItemProps) {
  const router = useRouter();

  return <IconButton onClick={() => router.push(route)}>{children}</IconButton>;
}
