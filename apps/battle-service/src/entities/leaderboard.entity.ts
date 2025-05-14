import { LeaderboardDao } from '../infrastructure/typeorm/leaderboard.dao';

export class Leaderboard {
  constructor(
    readonly identifier: string,
    readonly name: string,
    readonly description: string, 
    readonly gold: number, 
    readonly silver: number,
    readonly games: number,
    readonly rank: number,
    //readonly playerStatus
  ) {}

  
  static fromDao(leaderboardDao: LeaderboardDao): Leaderboard {
    const leaderboard = new Leaderboard(
      leaderboardDao.identifier,
      leaderboardDao.name,
      leaderboardDao.description,
      leaderboardDao.gold,
      leaderboardDao.silver, 
      leaderboardDao.games,
      leaderboardDao.rank,
    );
    return leaderboard;
  }
}
