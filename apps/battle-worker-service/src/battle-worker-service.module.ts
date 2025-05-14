import { BattleWorkerServiceController } from './battle-worker-service.controller';
import { BattleWorkerServiceService } from './battle-worker-service.service';
import { EnvModule } from './config/env.module';
import { Module } from '@nestjs/common';
import { SharedModule } from '@app/shared';

@Module({
  imports: [
     SharedModule,
     EnvModule
  ],
  controllers: [BattleWorkerServiceController],
  providers: [BattleWorkerServiceService],
})
export class BattleWorkerServiceModule {}
