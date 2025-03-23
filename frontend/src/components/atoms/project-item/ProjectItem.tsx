import Image from 'next/image'
import Link from 'next/link'
import { ProjectItemProps } from './types'

export function ProjectItem({ project, className, ...rest }: Omit<ProjectItemProps, 'href'>) {
  return (
    <Link
      {...rest}
      href={`/projects/${project.id}`}
    >
      <div
        className={`min-w-64 min-h-64 relative rounded-2xl overflow-hidden border border-zinc-800 ${className ?? ''}`}
      >
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          objectFit='object-cover'
        />
      </div>
    </Link>
  )
}
