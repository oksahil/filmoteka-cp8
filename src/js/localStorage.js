export const getLocalSt = (key) => {
    try {
        const gotten = localStorage.getItem(key);
        return JSON.parse(gotten);
    } catch (error) {
        console.log("Error", error);
    }
}
export const setLocalSt = (key, value) => {
  try {
      const setten = JSON.stringify(value);
      return localStorage.setItem(key, setten);
    
  } catch (error) {
    console.log('Error', error);
  }
};
export const remLocalSt = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.log('Error', error);
  }
};
