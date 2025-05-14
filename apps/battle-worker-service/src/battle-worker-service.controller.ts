import { Controller, Get } from '@nestjs/common';
import { BattleWorkerServiceService } from './battle-worker-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BattleMessagePatternsName } from '@app/shared/battles/constants/battle-message-patterns-name';

@Controller()
export class BattleWorkerServiceController {
  constructor(private readonly battleWorkerServiceService: BattleWorkerServiceService) {}

  @Get()
  getHello(): string {
    return this.battleWorkerServiceService.getHello();
  }

  @MessagePattern(BattleMessagePatternsName.CREATE)
  handleCreateBattle(@Payload() data: any){
    console.log('Received data from queue:', data);
  }
}
