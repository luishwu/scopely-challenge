import { Injectable, Inject } from '@nestjs/common';
import { Battle } from './entities/battle.entity';
import { BattleRepository } from './application/battles.repository';

@Injectable()
export class BattleServiceService {

  constructor(
    @Inject(BattleRepository)
    private readonly battleRepository: BattleRepository,
  ) {}
  getHello(): string {
    return 'Hello World from Battle Service!';
  }
   async create(battle: Battle): Promise<string> {
      try {
        return await this.battleRepository.create(battle);
      } catch (error) {
        throw new Error(error);
      }
    }
}
