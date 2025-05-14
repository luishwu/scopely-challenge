import { PlayerDao } from '../infrastructure/type-orm/player.dao';

export class Player {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly gold: number,
    readonly silver: number,
    readonly hit: number,
    readonly defense: number,
    readonly attack: number,
  ) {}

  static fromDao(playerDao: PlayerDao): Player {
    const player = new Player(
      playerDao.name,
      playerDao.description,
      playerDao.gold,
      playerDao.silver,
      playerDao.hit,
      playerDao.defense,
      playerDao.attack,
    );

    return player;
  }
}
