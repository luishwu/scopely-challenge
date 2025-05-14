import { Controller, Get, Inject } from '@nestjs/common';
import { BattleServiceService } from './battle-service.service';
import { BattleMessagePatternsName } from '@app/shared/battles/constants/battle-message-patterns-name';
import { CreateBattleResponseDto } from '@app/shared/battles/dto/create-battle-responde.dto';
import { CreateBattleDto } from '@app/shared/battles/dto/create-battle.dto';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { BrokerQueues } from '@app/shared/core/constants/broker/broker-queues';

@Controller('battles')
export class BattleServiceController {
  constructor(private readonly battleService: BattleServiceService,
    @Inject(BrokerQueues.BATTLE_SERVICE_QUEUE) private readonly client: ClientProxy
  ) {
  }

  @MessagePattern(BattleMessagePatternsName.HELLO)
  getHello(): string {
    return this.battleService.getHello();
  }

  @MessagePattern(BattleMessagePatternsName.CREATE)
  async create(
    @Payload() payload: { createBattleDto: CreateBattleDto },
  ): Promise<CreateBattleResponseDto> {
    const identifier: string = await this.battleService.create(
      payload.createBattleDto,
    );
    this.client.emit(BattleMessagePatternsName.CREATE, payload.createBattleDto);
    console.log('createBattleDto', payload.createBattleDto);
    return new CreateBattleResponseDto(identifier);
  }
}
