import { BattleMessagePatternsName } from '@app/shared/battles/constants/battle-message-patterns-name';
import { CreateBattleResponseDto } from '@app/shared/battles/dto/create-battle-responde.dto';
import { CreateBattleDto } from '@app/shared/battles/dto/create-battle.dto';
import { ClientServices } from '@app/shared/core/constants/client-services';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class BattlesService {
  constructor(
    @Inject(ClientServices.BATTLES_SERVICE)
    private readonly battlesServiceClient: ClientProxy,
  ) {}

  hello(): Observable<string> {
    const pattern = BattleMessagePatternsName.HELLO;
    const payload = '';
    return this.battlesServiceClient.send<string>(pattern, payload);
  }

  create(
    createBattleDto: CreateBattleDto,
  ): Observable<CreateBattleResponseDto> {
    const pattern = BattleMessagePatternsName.CREATE;
    const payload = { createBattleDto };
    return this.battlesServiceClient.send<CreateBattleResponseDto>(
      pattern,
      payload,
    );
  }
}
