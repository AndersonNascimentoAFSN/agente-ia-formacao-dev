import { ITechnology } from '@core';
import { httpInstance } from '../api/api';

export class Technology {
  async getTechnologies(init?: RequestInit): Promise<{ data: ITechnology[] | undefined }> {
    const technologies = await httpInstance.get<ITechnology[] | undefined>({
      url: 'technologies',
      init,
    });

    return {
      data: technologies,
    }
  }

  async getTechnologiesHighlight(init?: RequestInit): Promise<{ data: ITechnology[] | undefined }> {
    const getTechnologiesHighlight = await httpInstance.get<ITechnology[] | undefined>({
      url: 'technologies/highlight',
      init,
    });

    return {
      data: getTechnologiesHighlight,
    }
  }
}

export const technologyInstance = new Technology();