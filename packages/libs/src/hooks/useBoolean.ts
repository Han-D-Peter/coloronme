import { useCallback, useState } from 'react';

export function useBoolean(initial: boolean) {
  const [state, setState] = useState(initial);

  const makeTrue = useCallback(() => {
    setState(true);
  }, []);

  const makeFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggle = () => setState((prev) => !prev);

  return [state, makeTrue, makeFalse, toggle] as const;
}
