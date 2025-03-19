import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma-provider/prisma.provider';

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],
})
export class DbModule {}
