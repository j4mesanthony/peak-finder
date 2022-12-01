export function useLocalStorage() {
  function addToStorage(key, value) {
    // TODO: Add in validation for each function; perhaps import from another composable
    localStorage.setItem(key, value);
  }

  function getFromStorage(key) {
    return localStorage.getItem(key);
  }

  function removeFromStorage(key) {
    localStorage.removeItem(key);
  }

  function clearStorage() {
    localStorage.clear();
  }

  return { addToStorage, getFromStorage, removeFromStorage, clearStorage };
}
