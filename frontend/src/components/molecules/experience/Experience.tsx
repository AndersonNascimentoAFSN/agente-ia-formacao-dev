import { ExperienceItem } from "@/components/atoms";

export function Experience() {
  return (
    <div className="p-6 flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 bg-black border border-zinc-800 rounded-2xl">
      <ExperienceItem main="+150" label="países atendidos" />
      <ExperienceItem main="+20" label="anos de experiência" />
      <ExperienceItem main="420k" label="alunos matriculados" />
    </div>
  )
}
