import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { PlayersRepository } from '../../application/players.repository';
import { Player } from '../../entities/player.entity';
import { PlayerDao } from './player.dao';

@Injectable()
export class PlayerTypeOrmRepository implements PlayersRepository {
  constructor(
    @InjectRepository(PlayerDao)
    private readonly playerRepository: Repository<PlayerDao>,
  ) {}

  async create(player: Player): Promise<string> {
    const createdPlayerDao: PlayerDao =
      await this.playerRepository.create(player);

    const insertResult: InsertResult = await this.playerRepository
      .createQueryBuilder()
      .insert()
      .into(PlayerDao)
      .values(createdPlayerDao)
      .execute();

    return insertResult.identifiers[0].id;
  }
}
