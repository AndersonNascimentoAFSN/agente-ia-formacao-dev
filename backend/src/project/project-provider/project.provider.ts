import { Injectable } from '@nestjs/common';
import { IProject, Level, Type } from '@core';
import { PrismaProvider } from 'src/db/prisma-provider/prisma.provider';

@Injectable()
export class ProjectProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async getProjects(): Promise<Omit<IProject, 'technologies'>[]> {
    const projects = await this.prisma.project.findMany();

    return projects.map((project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      images: project.images,
      type: project.type as Type,
      level: project.level as Level,
      repository: project.repository,
      highlight: project.highlight,
    }));
  }

  async getProjectById(id: number): Promise<IProject | null> {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        TechnologyProject: { include: { technology: true } },
      },
    });

    if (project) {
      return {
        id: project.id,
        name: project.name,
        description: project.description,
        images: project.images,
        type: project.type as Type,
        level: project.level as Level,
        repository: project.repository,
        highlight: project.highlight,
        technologies: project.TechnologyProject.map((tech) => ({
          id: tech.technology.id,
          name: tech.technology.name,
          description: tech.technology.description,
          highlight: tech.technology.highlight,
          image: tech.technology.image,
        })),
      };
    }

    return null;
  }
}
