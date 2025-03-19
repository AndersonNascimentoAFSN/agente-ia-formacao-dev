import { Controller, Get, Param } from '@nestjs/common';
import { ProjectProvider } from '../project-provider/project.provider';
import { IProject } from '@core';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectProvider: ProjectProvider) {}

  @Get()
  async getProjects(): Promise<Omit<IProject, 'technologies'>[]> {
    return await this.projectProvider.getProjects();
  }
  @Get(':id')
  async getProjectById(@Param('id') id: string): Promise<IProject | null> {
    return await this.projectProvider.getProjectById(+id);
  }
}
