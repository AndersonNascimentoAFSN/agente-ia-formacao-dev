import { ITechnologiesWorkedProps } from "./types";

export function TechnologiesWorked({ technologies }: ITechnologiesWorkedProps) {
  if (!technologies) {
    return null
  }

  return (
    <div className='flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl'>
      <div className="flex justify-center gap-x-3 flex-wrap">
        {technologies.map((technology, index) => (
          <div
            key={`${technology.id}-${index}`}
          >
            <span className="text-red-500 font-bold">#</span>
            <span>{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
