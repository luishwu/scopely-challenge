import { Player } from '../entities/player.entity';

export interface PlayersRepository {
  create(player: Player): Promise<string>;
}

export const PlayersRepository = Symbol('PlayersRepository');
