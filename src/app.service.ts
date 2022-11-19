import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    await sleep(5000)

    return 'Hello World!';
  }
}
