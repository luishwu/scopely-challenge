import { Controller, Get } from '@nestjs/common';
import { BattleServiceService } from './battle-service.service';
import { BattleMessagePatternsName } from '@app/shared/battles/constants/battle-message-patterns-name';
import { CreateBattleResponseDto } from '@app/shared/battles/dto/create-battle-responde.dto';
import { CreateBattleDto } from '@app/shared/battles/dto/create-battle.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('battles')
export class BattleServiceController {
  constructor(private readonly battleService: BattleServiceService) {}

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

    return new CreateBattleResponseDto(identifier);
  }
}
