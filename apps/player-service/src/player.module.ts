import * as ormconfig from './ormconfig';

import { SharedModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvModule } from 'apps/player-service/src/config/env.module';
import { PlayersRepository } from './application/players.repository';
import { PlayerTypeOrmRepository } from './infrastructure/type-orm/player-typeorm.repository';
import { PlayerDao } from './infrastructure/type-orm/player.dao';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot({
      ...ormconfig.default.options,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([PlayerDao]),
    SharedModule,
  ],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    { provide: PlayersRepository, useClass: PlayerTypeOrmRepository },
  ],
})
export class PlayerModule {}
