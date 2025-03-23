import { IExperienceItemProps } from "./types";

export function ExperienceItem({ main, label }: IExperienceItemProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-red-500 text-3xl font-bold leading-6">{main}</span>
      <span className="text-zinc-400 text-sm">{label}</span>
    </div>
  )
}
