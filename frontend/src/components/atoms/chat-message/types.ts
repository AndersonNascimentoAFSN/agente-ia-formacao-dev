import { Message } from "@/model/Message";

export interface IChatMessageProps {
  message: Message
  omitAuthor?: boolean
}