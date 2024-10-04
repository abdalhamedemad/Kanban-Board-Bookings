import { useState } from "react";

/**
 * Custom hook used to manage local storage using states
 *
 * @param {string} keyName The key of local storage
 * @param {any} defaultValue The default value for the local storage
 * @returns {[any, Function]} A stored value and a function to update it
 */
const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      // Log the exact value from local storage for debugging
      // console.log("Retrieved from localStorage:", value);

      if (value) {
        return JSON.parse(value); // Parse only if value exists
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error("Error reading from localStorage", err);
      return defaultValue;
    }
  });

  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error("Error setting localStorage", err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
