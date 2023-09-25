import { useCallback, useState } from 'react';

export function useBoolean(initial: boolean) {
  const [state, setState] = useState(initial);

  const makeTrue = useCallback(() => {
    setState(true);
  }, []);

  const makeFalse = useCallback(() => {
    setState(false);
  }, []);

  return [state, makeTrue, makeFalse] as const;
}
