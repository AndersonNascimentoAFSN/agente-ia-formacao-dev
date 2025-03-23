import React from 'react'
import type { IContainerProps } from './types'

export function Container({ children, className, ...rest }: IContainerProps) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  )
}
