'use client'

export class LocalStorage {
  public setItem<T>(key: string, value: T): void {
    try {
      const valueParsed = JSON.stringify(value);
      localStorage
        .setItem
        (key, valueParsed);
    } catch (error) {
      console.error(error);
    }
  }

  public getItem(key: string): string | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}


export const localStorageUtil = new LocalStorage();
