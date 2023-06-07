const getLocalStorage = (key: string) => window.localStorage.getItem(key);
const setLocalStorage = (key: string, value: string | number | boolean) =>
  window.localStorage.setItem(key, String(value));
const clearLocalStorage = () => window.localStorage.clear();

export { getLocalStorage, setLocalStorage, clearLocalStorage };
