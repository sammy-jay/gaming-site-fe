export const getLocalStorageItem = (key: string) => {
  try {
    const serializedItem = localStorage.getItem(key);

    if (serializedItem === null) {
      return undefined;
    }

    return JSON.parse(serializedItem);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
