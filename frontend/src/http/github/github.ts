export class Github {
  async getReadme({
    repoUrl,
  }: { repoUrl: string, init?: RequestInit }): Promise<string> {
    const repository = repoUrl?.split('github.com/')?.[1];
    const readmeUrl = `https://raw.githubusercontent.com/${repository}/main/README.md`;


    const readme = await fetch(readmeUrl)

    return readme.text();
  }
}

export const githubInstance = new Github();