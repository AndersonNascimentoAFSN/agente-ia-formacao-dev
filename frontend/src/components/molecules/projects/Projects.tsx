import { ProjectItem } from '@/components/atoms'
import { ProjectsProps } from './types'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export function Projects({ title, projects }: ProjectsProps) {
  return (
    <div className='flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5'>
      <h3 className='text-2xl font-bold text-white/70'>{title}</h3>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent className='flex'>
          {projects.map((project, index) => (
            <CarouselItem
              key={`${project.id}-${index}`}
              className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
            >
              <ProjectItem

                project={project}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
