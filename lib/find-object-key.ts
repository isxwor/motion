const findObjectKey = (
  object: Record<string, string | number>,
  value: string | number
): string | undefined =>
  Object.keys(object).find((key) => object[key] === value);

export default findObjectKey;
