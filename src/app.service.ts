import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(
    private readonly producerService: ProducerService,
  ) { }

  async getHello() {
    await this.producerService.produce({
      topic: 'test1',
      messages: [
        {
          value: 'hello'
        }
      ],
    });

    return "Hello from";
  }
}
