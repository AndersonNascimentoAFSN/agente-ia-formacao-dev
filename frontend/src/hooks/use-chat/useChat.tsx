'use client';

import { Message } from '@/model/Message';
import { useLocalStorage } from '../use-local-storage';
import { Id } from '@core';
import { toTalk } from '@/http/chat';
import { useState } from 'react';
// import { chatInstance, toTalk } from '@/http/chat';

export function useChat() {
  const [chatId] = useLocalStorage<string>('chatId', Id.generate());
  const [messages, setMessages] = useLocalStorage<Message[]>("messages", []);
  const [thinking, setThinking] = useState<boolean>(false)

  async function addMessage(messageText: string) {
    try {
      setThinking(true)
      const newMessage: Message = {
        Id: Id.generate(),
        text: messageText,
        author: 'Visitante',
        side: 'right',
      }

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      const answer = await toTalk({
        chatId,
        message: newMessage,
      })

      if (!answer) return;

      const assistantMessage: Message = {
        Id: Id.generate(),
        text: answer,
        author: 'Assistant',
        side: 'left',
      }

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } finally {
      setThinking(false)
    }
  }

  function clearMessages() {
    setMessages([]);
  }

  return {
    chatId,
    messages,
    addMessage,
    clearMessages,
    thinking,
  }
}
