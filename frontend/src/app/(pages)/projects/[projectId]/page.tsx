import { CarrosselImages, Container, Header, Readme } from "@/components";
import { Technologies } from "@/components";
import { githubInstance, projectInstance } from "@/http";

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;

  const project = await projectInstance.getProject({ id: projectId });

  if (!project) {
    return null;
  }

  const readmeProject = await githubInstance.getReadme({ repoUrl: project?.repository });

  return (
    <div>
      <Header />

      <Container
        className="py-7 flex flex-col items-center gap-10"
      >
        <h1 className="text-3xl font-bold self-start">{project.name}</h1>
        <CarrosselImages images={project.images.slice(1) ?? []} />
        <Technologies technologies={project.technologies} />

        <Readme markdown={readmeProject} />
      </Container>
    </div>
  )
}
