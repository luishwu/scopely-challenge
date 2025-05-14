import { ClientServices } from '@app/shared/core/constants/client-services';
import { PlayerMessagePatternsName } from '@app/shared/players/constants/player-message-patterns-name';
import { CreatePlayerResponseDto } from '@app/shared/players/dto/create-player-responde.dto';
import { CreatePlayerDto } from '@app/shared/players/dto/create-player.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class PlayersService {
  constructor(
    @Inject(ClientServices.PLAYERS_SERVICE)
    private readonly playersServiceClient: ClientProxy,
  ) {}

  hello(): Observable<string> {
    const pattern = PlayerMessagePatternsName.HELLO;
    const payload = '';
    return this.playersServiceClient.send<string>(pattern, payload);
  }

  create(
    createPlayerDto: CreatePlayerDto,
  ): Observable<CreatePlayerResponseDto> {
    const pattern = PlayerMessagePatternsName.CREATE;
    const payload = { createPlayerDto };
    return this.playersServiceClient.send<CreatePlayerResponseDto>(
      pattern,
      payload,
    );
  }
}
