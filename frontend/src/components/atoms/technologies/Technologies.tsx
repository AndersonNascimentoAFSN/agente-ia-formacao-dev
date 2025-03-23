import Image from "next/image";
import { ITechnologiesProps } from "./types";

export function Technologies({ technologies }: ITechnologiesProps) {
  if (!technologies) {
    return null
  }

  return (
    <div className="flex justify-center gap-4 flex-wrap w-4/5">
      {technologies.map((technology, index) => (
        <div
          key={`${technology.id}-${index}`}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="relative h-11 w-11 sm:h-16 sm:w-16 rounded-xl overflow-hidden"
          >
            <Image
              src={technology.image}
              alt={technology.name}
              fill
              className="object-contain"
            />
          </span>
          <span className="text-[10px] text-zinc-400">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  )
}
