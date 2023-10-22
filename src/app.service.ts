import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(
    private readonly producerService: ProducerService,
  ) { }

  async getHello() {
    // await this.producerService.produce({
    //   topic: 'test1',
    //   messages: [
    //     {
    //       value: 'hello'
    //     }
    //   ],
    // });
    await this.producerService.produce('test', {
      value: 'Hello World',
    });

    return "Hello from";
  }
}
