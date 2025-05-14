import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

import { DbTablesNames } from 'apps/battle-service/src/core/constants/db-table-names';
import { Leaderboard } from '../../entities/leaderboard.entity';

@Entity(DbTablesNames.LEADERBOARD)
export class LeaderboardDao extends Leaderboard {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: string;

  @Column()
  declare identifier: string;

  @Column()
  declare name: string;

  @Column()
  declare description: string;

  @Column()
  declare gold: number;

  @Column()
  declare silver: number;

  @Column()
  declare games: number;

  @Column()
  declare rank: number;
}
