import { ClientsModule, Transport } from '@nestjs/microservices';
import { Global, Module } from '@nestjs/common';

import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { BattlesModule } from './battles/battles.module';
import { ClientServices } from '@app/shared/core/constants/client-services';
import { ConfigService } from '@nestjs/config';
import { EnvModule } from './config/env.module';
import { EnvironmentVariables } from './config/env.variables';
import { PlayersModule } from './players/players.module';
import { SharedModule } from '@app/shared';

@Global()
@Module({
  imports: [
    EnvModule,
    ClientsModule.registerAsync([
      {
        name: ClientServices.PLAYERS_SERVICE,
        inject: [ConfigService],
        useFactory: async (
          configService: ConfigService<EnvironmentVariables>,
        ) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('player.host', { infer: true }),
            port: configService.get('player.port', { infer: true }),
          },
        }),
      },
      {
        name: ClientServices.BATTLES_SERVICE,
        inject: [ConfigService],
        useFactory: async (
          configService: ConfigService<EnvironmentVariables>,
        ) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('battle.host', { infer: true }),
            port: configService.get('battle.port', { infer: true }),
          },
        }),
      }
    ]),
    SharedModule,
    PlayersModule,
    BattlesModule
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
  exports: [ClientsModule],
})
export class ApiGatewayModule {}
