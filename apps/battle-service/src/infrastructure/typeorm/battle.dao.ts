import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

import { Battle } from '../../entities/battle.entity';
import { BattleStatusTypes } from '@app/shared/core/types/settings';
import { DbTablesNames } from 'apps/battle-service/src/core/constants/db-table-names';

@Entity(DbTablesNames.BATTLE)
export class BattleDao extends Battle {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: string;

  @Column()
  declare player1: string;

  @Column()
  declare player2: string;

  @CreateDateColumn({ type: 'timestamptz' })
  declare date: Date;

  @Column({type: 'enum', enum: BattleStatusTypes, default: BattleStatusTypes.PENDING})
  declare status: BattleStatusTypes;
}
