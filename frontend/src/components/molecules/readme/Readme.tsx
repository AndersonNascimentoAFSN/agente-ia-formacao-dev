import React from 'react'
import { IReadmeProps } from './types'
import { MarkdownContent } from '@/components/atoms'

export function Readme({ markdown }: IReadmeProps) {
  return (
    <div className='flex flex-col items-stretch border p-6  bg-black border-zinc-800 rounded-2xl'>
      <div className='prose prose-zinc prose-invert'>
        <MarkdownContent markdown={markdown} />
      </div>
    </div>
  )
}
