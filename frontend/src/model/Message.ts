import { Id } from '@core';

export interface Message {
  Id: Id;
  text: string;
  author: string;
  side: 'left' | 'right';
}