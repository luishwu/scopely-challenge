import * as ormconfig from './ormconfig';

import { BattleDao } from './infrastructure/typeorm/battle.dao';
import { BattleRepository } from './application/battles.repository';
import { BattleServiceController } from './battle-service.controller';
import { BattleServiceService } from './battle-service.service';
import { BattleTypeOrmRepository } from './infrastructure/typeorm/battle-typeorm-options';
import { EnvModule } from 'apps/battle-service/src/config/env.module';
import { Module } from '@nestjs/common';
import { SharedModule } from '@app/shared';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot({
      ...ormconfig.default.options,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([BattleDao]),
    SharedModule,
  ],
  controllers: [ BattleServiceController],
  providers: [
    BattleServiceService,
    { provide: BattleRepository, useClass: BattleTypeOrmRepository },
  ],
})
export class BattleServiceModule {}