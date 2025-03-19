import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ProjectModule } from './project/project.module';
import { TechnologyModule } from './technology/technology.module';

@Module({
  imports: [DbModule, ProjectModule, TechnologyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
