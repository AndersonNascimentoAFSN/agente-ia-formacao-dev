import { env } from "@/env";

const baseUrl = env.NEXT_PUBLIC_API_URL;

export class Http {
  async get<T>({ url, init }: { url: string, init?: RequestInit }): Promise<T> {
    const response = await fetch(this.normalizeUrl(`${baseUrl}/${url}`), {
      method: "GET",
      ...init,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  private normalizeUrl(url: string) {
    const protocol = url.split("://")[0]
    const rest = url.split("://")[1]
    return `${protocol}://${rest.replaceAll(/\/{2,}/g, "/")}`;
  }
}

export const httpInstance = new Http();
