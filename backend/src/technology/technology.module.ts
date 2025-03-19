import { Module } from '@nestjs/common';
import { TechnologyController } from './technology-controller/technology.controller';
import { TechnologyProvider } from './technology-provider/technology.provider';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyProvider],
  imports: [DbModule],
})
export class TechnologyModule {}
