import { useCallback, useState } from "react";

export const useBooleanState = (initialValue = false) => {
  const [bool, setBool] = useState(initialValue);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const setToggle = useCallback(() => {
    setBool((prev) => !prev);
  }, []);

  return [bool, setTrue, setFalse, setToggle] as const;
};
