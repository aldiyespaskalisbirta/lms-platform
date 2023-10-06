import { useEffect, useState } from "react";

export function useDebaunce<T>(value: T, delay?: number): T {
  const [debaunceValue, setDebaunceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebaunceValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debaunceValue;
}
