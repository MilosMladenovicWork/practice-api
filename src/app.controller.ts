import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logger: LoggerService) { }

  @Get()
  async getHello(): Promise<{ data: string }> {
    console.log('request received')
    console.log(`pid ${process.pid}`)
    console.log(`ppid ${process.ppid}`)
    return { data: await this.appService.getHello() };
  }
}
