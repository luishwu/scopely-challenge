import * as ormconfig from './ormconfig';

import { ClientsModule, Transport } from '@nestjs/microservices';

import { BattleDao } from './infrastructure/typeorm/battle.dao';
import { BattleRepository } from './application/battles.repository';
import { BattleServiceController } from './battle-service.controller';
import { BattleServiceService } from './battle-service.service';
import { BattleTypeOrmRepository } from './infrastructure/typeorm/battle-typeorm-options';
import { BrokerQueues } from '@app/shared/core/constants/broker/broker-queues';
import { ConfigService } from '@nestjs/config';
import { EnvModule } from 'apps/battle-service/src/config/env.module';
import { EnvironmentVariables } from './config/env.variables';
import { Module } from '@nestjs/common';
import { SharedModule } from '@app/shared';
import { TypeOrmModule } from '@nestjs/typeorm';

//URL `'amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}'`
@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot({
      ...ormconfig.default.options,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([BattleDao]),
    SharedModule,
    ClientsModule.registerAsync([
      {
        name: BrokerQueues.BATTLE_SERVICE_QUEUE,
        inject: [ConfigService],
        useFactory: async (configService: ConfigService<EnvironmentVariables>) => ({
          transport: Transport.RMQ, // Explicitly set to Transport.RMQ
          options: {
            urls: [`amqp://${configService.get('rabbitmq.user', { infer: true})}:${configService.get('rabbitmq.password', { infer: true})}@${configService.get('rabbitmq.host', { infer: true})}:${configService.get('rabbitmq.port', { infer: true})}`],
            queue: BrokerQueues.BATTLE_QUEUE_NAME,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]), // 1 = Transport.RMQ
  ],
  controllers: [ BattleServiceController],
  providers: [
    BattleServiceService,
    { provide: BattleRepository, useClass: BattleTypeOrmRepository },
  ],
})
export class BattleServiceModule {}