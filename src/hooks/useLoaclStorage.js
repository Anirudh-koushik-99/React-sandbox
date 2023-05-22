import { useState } from "react";

function useLoaclStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLoaclStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    //Set to state
    setLocalStorageValue(value);
    //Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLoaclStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}
export default useLoaclStorage;
