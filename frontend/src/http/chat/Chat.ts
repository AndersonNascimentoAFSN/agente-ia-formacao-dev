'use server';

import { env } from "@/env";
import { Message } from "@/model/Message";

// export class Chat {
//   public async toTalk({
//     chatId,
//     message,
//   }: { chatId: string; message: Message }): Promise<string | null> {
//     const webhookUrl = env.CHAT_WEBHOOK_URL;

//     const response = await fetch(webhookUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         chatId,
//         message: message.text,
//       }),
//     });

//     const responseAnswer = await response.json();

//     return responseAnswer?.answer;
//   }
// }

// export const chatInstance = new Chat();

export async function toTalk({
  chatId,
  message,
}: { chatId: string; message: Message }): Promise<string | null> {
  const webhookUrl = env.CHAT_WEBHOOK_URL;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chatId,
      message: message.text,
    }),
  });

  const responseAnswer = await response.json();

  return responseAnswer?.answer;
}