import Image from "next/image";
import { MarkdownContent } from "../markdown-content";
import { IChatMessageProps } from "./types";

export function ChatMessage({ message, omitAuthor }: IChatMessageProps) {
  const side = {
    left: chatMessageLeft,
    right: chatMessageRight
  }

  return side[message.side]({ message, omitAuthor })
}

function chatMessageLeft({ message, omitAuthor }: IChatMessageProps) {
  return (
    <div className="flex gap-4">
      {!omitAuthor && (
        <Image
          src="/chat.svg"
          alt="Assistente"
          width={40}
          height={40}
          className="self-start"
        />
      )}
      <div className={`flex flex-col ${omitAuthor && "pl-16"}`}>
        {!omitAuthor && (
          <span className="text-xs text-zinc-600">{message?.author}</span>
        )}

        <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
          <MarkdownContent markdown={message?.text} />
        </div>
      </div>
    </div>
  )
}

function chatMessageRight({ message, omitAuthor }: IChatMessageProps) {
  return (
    <div className={`flex flex-col items-end ${omitAuthor && "pr-2"}`}>
      {!omitAuthor && (
        <span className="text-xs text-zinc-600">{message?.author}</span>
      )}

      <div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
        <MarkdownContent markdown={message?.text} />
      </div>
    </div>
  )
}
