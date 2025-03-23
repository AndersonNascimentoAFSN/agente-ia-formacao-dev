import Markdown from "react-markdown";
import { IMarkdownContent } from "./types";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function MarkdownContent({ markdown }: IMarkdownContent) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
    >
      {markdown}
    </Markdown>
  )
}
