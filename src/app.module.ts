import {  Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppCronService } from './app-cron.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, LoggerService, AppCronService],
})
export class AppModule {}
