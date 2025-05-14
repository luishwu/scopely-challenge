import { BattleDao } from './infrastructure/typeorm/battle.dao';
import { DataSource } from 'typeorm';
import { LeaderboardDao } from './infrastructure/typeorm/leaderboard.dao';

require('dotenv').config({
  path: `./apps/battle-service/src/environments/.env.${process.env.NODE_ENV}`,
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!),
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [BattleDao, LeaderboardDao],
  migrations: ['./migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  logging: true,
  synchronize: true,
});

switch (process.env.NODE_ENV) {
  case 'development':
    break;
  case 'test':
    Object.assign(AppDataSource.options, {
      migrationsRun: true,
    });
    break;
  case 'production':
    break;
  default:
    throw new Error('unknown environment');
}

export default AppDataSource;
