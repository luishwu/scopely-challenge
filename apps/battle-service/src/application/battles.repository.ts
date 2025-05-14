import { Battle } from '../entities/battle.entity';

export interface BattleRepository {
  create(battle: Battle): Promise<string>;
}

export const BattleRepository = Symbol('BattleRepository');
