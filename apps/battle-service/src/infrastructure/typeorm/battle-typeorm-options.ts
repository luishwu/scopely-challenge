import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { BattleRepository } from '../../application/battles.repository';
import { BattleDao } from './battle.dao';
import { Battle } from '../../entities/battle.entity';

@Injectable()
export class BattleTypeOrmRepository implements BattleRepository {
  constructor(
    @InjectRepository(BattleDao)
    private readonly battleRepository: Repository<BattleDao>,
  ) {}

  async create(battle: Battle): Promise<string> {
    const createdBattleDao: BattleDao =
      await this.battleRepository.create(battle);

    const insertResult: InsertResult = await this.battleRepository
      .createQueryBuilder()
      .insert()
      .into(BattleDao)
      .values(createdBattleDao)
      .execute();

    return insertResult.identifiers[0].id;
  }
}
