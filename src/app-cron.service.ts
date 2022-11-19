import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { LoggerService } from './logger.service';

@Injectable()
export class AppCronService {

    @Cron(CronExpression.EVERY_5_SECONDS)
    handleCron() {
        console.log('cron')
    }
}