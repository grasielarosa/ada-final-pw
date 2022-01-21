// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapToArray = (object: any) => {
  const array = [];

  for (const elem in object) {
    array.push({
      id: elem,
      ...object[elem],
    });
  }
  return array;
};
