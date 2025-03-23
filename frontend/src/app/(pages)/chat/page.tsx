'use client'

import { MarkdownContent } from '@/components';
import { useChat } from '@/hooks';
import Image from 'next/image';
import React, { useState } from 'react'

export default function Page() {
  const { chatId, messages, addMessage, clearMessages, thinking } = useChat();
  const [text, setText] = useState('');

  return (
    <div>
      <h1>chat</h1>
      <h2>Chat ID: {chatId}</h2>
      <button type="button" onClick={clearMessages}>Limpar mensagens</button>

      <ul>
        {messages?.map((message, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <span>{message.author}:</span>
            <MarkdownContent markdown={message.text} />
          </li>
        ))}
      </ul>

      {
        thinking && (
          <div>
            <Image src="/pensando.gif" alt="Thinking" width={50} height={50} />
          </div>
        )
      }

      <label htmlFor="text">Message</label>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className='border border-gray-300 rounded-md p-2'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addMessage(text);
            setText('');
          }
        }}
      />
    </div>
  )
}
