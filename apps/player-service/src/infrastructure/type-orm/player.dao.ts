import { Column, Entity, PrimaryColumn } from 'typeorm';

import { DbTablesNames } from '../../core/constants/db-table-names';
import { Player } from '../../entities/player.entity';

@Entity(DbTablesNames.PLAYER)
export class PlayerDao extends Player {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: string;

  @Column({ unique: true })
  declare name: string;

  @Column()
  declare description: string;

  @Column()
  declare gold: number;

  @Column()
  declare silver: number;

  @Column()
  declare hit: number;

  @Column()
  declare defense: number;

  @Column()
  declare attack: number;
}
