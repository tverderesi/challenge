export const getValueRecursively = (obj: any) => {
  const keysArray = Object.keys(obj).map((key) =>
    key.split(".").filter((key) => key !== null)
  );

  keysArray.forEach((key) => {
    if (key.length === 1) {
      const key0 = key[0];

      return obj.locale;
    }
  });
};
