import { Injectable } from '@nestjs/common';

@Injectable()
export class BattleWorkerServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
