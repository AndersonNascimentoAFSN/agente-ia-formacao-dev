import { Controller, Get } from '@nestjs/common';
import { ITechnology } from '@core';
import { TechnologyProvider } from '../technology-provider/technology.provider';

@Controller('technologies')
export class TechnologyController {
  constructor(private readonly technologyProvider: TechnologyProvider) {}

  @Get()
  async getTechnologies(): Promise<ITechnology[]> {
    return this.technologyProvider.getTechnologies();
  }

  @Get('highlighted')
  async getHighlightedTechnologies(): Promise<ITechnology[]> {
    return this.technologyProvider.getHighlightedTechnologies();
  }
}
