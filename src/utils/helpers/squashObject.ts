export const squashObject = (
  inputObject: Record<string, any>,
  parentKey = '',
): Record<string, any> => {
  const outputObject = {};
  for (const key in inputObject) {
    if (Object.hasOwn(inputObject, key) === true) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof inputObject[key] === 'object' &&
        !Array.isArray(inputObject[key])
      ) {
        Object.assign(outputObject, squashObject(inputObject[key], newKey));
      } else {
        outputObject[newKey] = inputObject[key];
      }
    }
  }
  return outputObject;
};
