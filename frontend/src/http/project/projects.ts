import { IProject } from '@core';
import { httpInstance } from '../api/api';

export class Project {
  async getProjects(init?: RequestInit): Promise<{ data: IProject[] | undefined }> {
    const projects = await httpInstance.get<IProject[] | undefined>({
      url: 'projects',
      init,
    });

    return {
      data: projects,
    }
  }

  async getProject({
    id,
    init
  }: { id: string, init?: RequestInit }): Promise<IProject | undefined> {
    const project = await httpInstance.get<IProject | undefined>({
      url: `/projects/${id}`,
      init,
    });

    return project 
  }
}

export const projectInstance = new Project();