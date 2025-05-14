import { BattlesController } from './battles.controlles';
import { BattlesService } from './battles.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [BattlesService],
  controllers: [BattlesController],
})
export class BattlesModule {}
