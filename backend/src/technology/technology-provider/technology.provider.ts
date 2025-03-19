import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma-provider/prisma.provider';
import type { ITechnology } from '@core';

@Injectable()
export class TechnologyProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async getTechnologies(): Promise<ITechnology[]> {
    return this.prisma.technology.findMany();
  }

  async getHighlightedTechnologies(): Promise<ITechnology[]> {
    return this.prisma.technology.findMany({
      where: {
        highlight: true,
      },
    });
  }
}
