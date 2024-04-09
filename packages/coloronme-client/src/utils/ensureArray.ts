export const ensureArray = <T extends {}>(value: T | T[] | undefined): T[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
};
