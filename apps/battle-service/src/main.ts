import { NestApplicationValidationPipe } from '@app/shared/core/pipes/nest-application-validation.pipe';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, RmqOptions, Transport } from '@nestjs/microservices';
import { EnvironmentVariables } from './config/env.variables';
import { BattleServiceModule } from './battle-service.module';
import { nestApplicationOptions } from './nest-application-options';
import { BrokerQueues } from '@app/shared/core/constants/broker/broker-queues';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(BattleServiceModule, {
    ...nestApplicationOptions,
  });

  app.useGlobalPipes(new NestApplicationValidationPipe());

  const configService = app.get<ConfigService<EnvironmentVariables>>(
    ConfigService<EnvironmentVariables>,
  );
  //setup microservice RabbitMQ creating the queue
  /*const amqpUrl = `amqp://${configService.get('rabbitmq.user', { infer: true})}:${configService.get('rabbitmq.password', { infer: true})}@${configService.get('rabbitmq.host', { infer: true})}:${configService.get('rabbitmq.port', { infer: true})}`;
  app.connectMicroservice<RmqOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [amqpUrl],
      queue: BrokerQueues.BATTLE_SERVICE_QUEUE,
      queueOptions: {
        durable: true,
      },
       noAck: false,
    },
  },
  { inheritAppConfig: true },
  );*/

  const port = +configService.get('port');
  const battlePort = configService.get('battle.port', { infer: true });
  const battleHost = configService.get('battle.host', { infer: true });
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        host: battleHost,
        port: battlePort,
      },
    },
    { inheritAppConfig: true },
  );
  await app.startAllMicroservices();

  await app.listen(port);
}
bootstrap();