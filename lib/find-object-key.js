const findObjectKey = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

export default findObjectKey;
