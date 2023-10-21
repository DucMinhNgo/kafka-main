import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: ['localhost:9092'],
  //     }
  //   }
  // });
  // await app.listen();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
