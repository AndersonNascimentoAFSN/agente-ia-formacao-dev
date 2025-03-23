'use client'

import { useEffect, useRef, useState } from "react";
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react";

import { useChat } from "@/hooks";
import { ChatMessage } from "../chat-message";
import Image from "next/image";

export function WindowChat() {
  const { messages, addMessage, clearMessages, thinking } = useChat()
  const [textMessage, setTextMessage] = useState<string>("")
  const endChatRef = useRef<HTMLDivElement>(null)

  function handlerSendMessage() {
    addMessage(textMessage)
    setTextMessage("")
  }

  useEffect(() => {
    endChatRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
      <div className="flex justify-between items-center bg-white p-4">
        <h2 className="text-xl font-bold">Olá visitante!</h2>
        <IconReload
          size={24}
          className="text-black cursor-pointer"
          onClick={clearMessages}
        />
      </div>

      {messages.length === 0
        ? (
          <div
            className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]"
          >
            <IconMessages
              size={230}
              stroke={0.2}
              className="text-black/30"
            />
            <span>Vamos conversar?</span>
          </div>
        )
        : (
          <div className="flex flex-col p-2 gap-2 min-h-[400px] sm:min-h-[500px] overflow-y-scroll sm:max-h-[500px] max-h-[400px]">
            {messages.map((message, index) => {
              const sameAuthor = index > 0 && messages[index - 1].author === message.author
              return (
                <ChatMessage key={index} message={message} omitAuthor={sameAuthor} />
              )
            })}

            {thinking && (
              <Image src="/pensando.gif" alt="Thinking" width={50} height={50} />
            )}

            <div ref={endChatRef} />
          </div>
        )}

      <div className="h-px bg-zinc-400 mt-4" />

      <div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white">
        <input
          type="text"
          value={textMessage}
          className="flex-1 bg-transparent h-8 outline-none pl-3"
          onChange={(e) => setTextMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlerSendMessage()
            }
          }}
          placeholder="Digite sua mensagem..."
        />

        <button
          type="button"
          className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500" aria-label="Enviar mensagem"
          onClick={handlerSendMessage}
        >
          <IconSend className="text-white" size={18} />
        </button>
      </div>
    </div>
  )
}
