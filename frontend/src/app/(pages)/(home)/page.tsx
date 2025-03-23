import { Container, Curriculum, Main } from "@/components";
import { Projects } from "@/components";
import { httpInstance } from "@/http";
import { IProject, ITechnology, Type } from "@core";

export default async function Home() {
  const technologies = await httpInstance.get<ITechnology[]>({
    url: "technologies",
    init: {
      next: {
        revalidate: 1000 * 60 * 60,
      }
    }
  }) ?? [];

  const technologiesHighlight = await httpInstance.get<ITechnology[]>({
    url: "technologies/highlighted",
    init: {
      next: {
        revalidate: 1000 * 60 * 60,
      }
    }
  }) ?? [];

  const projects = await httpInstance.get<IProject[]>({
    url: "projects",
    init: {
      next: {
        revalidate: 1000 * 60 * 60,
      }
    }
  }) ?? [];

  const highlightedProjects = projects.filter(project => project.highlight);
  const webProjects = projects.filter(project => project.type === Type.WEBSITE);
  const mobileProjects = projects.filter(project => project.type === Type.MOBILE);
  const gameProjects = projects.filter(project => project.type === Type.GAME);

  return (
    <div>
      <Main technologies={technologiesHighlight} />
      <Container className="py-16 flex flex-col gap-10 items-center bg-black">
        <Projects title="Destaque" projects={highlightedProjects} />
        <Projects title="Web" projects={webProjects} />
        <Projects title="Mobile" projects={mobileProjects} />
        <Projects title="Jogos" projects={gameProjects} />

        <Curriculum technologies={technologies} />
      </Container>
    </div>
  );
}
