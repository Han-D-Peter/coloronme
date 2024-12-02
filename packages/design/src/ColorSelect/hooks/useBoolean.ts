import { useCallback, useState } from 'react';

export default function useBoolean(initialValue: boolean) {
  const [isShown, setIsShown] = useState(initialValue);

  const open = useCallback(function open() {
    setIsShown(true);
  }, []);

  const close = useCallback(function close() {
    setIsShown(false);
  }, []);

  return [isShown, open, close] as const;
}
