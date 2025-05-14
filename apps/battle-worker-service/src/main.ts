import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { BattleWorkerServiceModule } from './battle-worker-service.module';
import { BrokerQueues } from '@app/shared/core/constants/broker/broker-queues';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config/env.variables';
import { INestApplication } from '@nestjs/common';
import { NestApplicationValidationPipe } from '@app/shared/core/pipes/nest-application-validation.pipe';
import { NestFactory } from '@nestjs/core';
import { nestApplicationOptions } from './nest-application-options';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(BattleWorkerServiceModule, {
    ...nestApplicationOptions,
  });

  app.useGlobalPipes(new NestApplicationValidationPipe());

  const configService = app.get<ConfigService<EnvironmentVariables>>(
    ConfigService<EnvironmentVariables>,
  );

  const port = +configService.get('port');
  // const battleWorkerPort = configService.get('battleworker.port', { infer: true });
  // const battleWorkerHost = configService.get('battleworker.host', { infer: true });

  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.RMQ,
      options: {
         urls: ['amqp://admin:admin@localhost:5672'],
        queue: BrokerQueues.BATTLE_QUEUE_NAME,
        queueOptions: {
          durable: true,
        },
    },
    },
    { inheritAppConfig: true },
  );

  await app.startAllMicroservices();

  await app.listen(port);
}
bootstrap();
