import { Module } from '@nestjs/common';
import { ProjectProvider } from './project-provider/project.provider';
import { ProjectController } from './project-controller/project.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [ProjectProvider],
  controllers: [ProjectController],
  imports: [DbModule],
})
export class ProjectModule {}
