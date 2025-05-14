import { NestApplicationValidationPipe } from '@app/shared/core/pipes/nest-application-validation.pipe';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EnvironmentVariables } from './config/env.variables';
import { nestApplicationOptions } from './nest-application-options';
import { PlayerModule } from './player.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(PlayerModule, {
    ...nestApplicationOptions,
  });

  app.useGlobalPipes(new NestApplicationValidationPipe());

  const configService = app.get<ConfigService<EnvironmentVariables>>(
    ConfigService<EnvironmentVariables>,
  );

  const port = +configService.get('port');
  const playerPort = configService.get('player.port', { infer: true });
  const playerHost = configService.get('player.host', { infer: true });

  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        host: playerHost,
        port: playerPort,
      },
    },
    { inheritAppConfig: true },
  );

  await app.startAllMicroservices();

  await app.listen(port);
}
bootstrap();
