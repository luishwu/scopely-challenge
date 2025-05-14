import { PlayerMessagePatternsName } from '@app/shared/players/constants/player-message-patterns-name';
import { CreatePlayerResponseDto } from '@app/shared/players/dto/create-player-responde.dto';
import { CreatePlayerDto } from '@app/shared/players/dto/create-player.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @MessagePattern(PlayerMessagePatternsName.HELLO)
  getHello(): string {
    return this.playerService.getHello();
  }

  @MessagePattern(PlayerMessagePatternsName.CREATE)
  async create(
    @Payload() payload: { createPlayerDto: CreatePlayerDto },
  ): Promise<CreatePlayerResponseDto> {
    const identifier: string = await this.playerService.create(
      payload.createPlayerDto,
    );

    return new CreatePlayerResponseDto(identifier);
  }
}
