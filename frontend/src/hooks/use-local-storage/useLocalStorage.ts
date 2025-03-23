'use client'

import { localStorageUtil } from "@/utils/local-storage";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const hasLocalStorageValue = localStorageUtil.getItem(key) as T;
    return hasLocalStorageValue ? hasLocalStorageValue : initialValue;
  })

  useEffect(() => {
    localStorageUtil.setItem<T>(key, value);
  }, [key, value])

  return [value, setValue] as const;
}
