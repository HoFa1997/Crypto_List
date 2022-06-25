import { useEffect, useRef, useState } from 'react';

export function useDebounce<T extends unknown>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value]);

  return debouncedValue;
}
