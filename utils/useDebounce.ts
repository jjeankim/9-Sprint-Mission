import { useEffect, useState } from "react"

const useDebounce = (value:string, delay:number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
     };
  },[value,delay])
  return debounceValue;
}

export default useDebounce;