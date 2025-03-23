import React from 'react'
import { ICurriculumProps } from './types'
import { Experience, TechnologiesWorked } from '@/components'
import { MiniCurriculum } from '../mini-curriculum'

export function Curriculum({ technologies }: ICurriculumProps) {
  return (
    <div className='flex flex-col lg:flex-row gap-4 min-h-72 w-full'>
      <MiniCurriculum />
      <Experience />
      <TechnologiesWorked technologies={technologies} />
    </div>
  )
}
