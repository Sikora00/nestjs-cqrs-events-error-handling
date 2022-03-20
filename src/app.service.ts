import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { SomethingHappenedEvent } from './something-happend.event';

@Injectable()
export class AppService {
  constructor(private readonly eventBus: EventBus) {}
  getHello(): string {
    this.eventBus.publish(new SomethingHappenedEvent());
    return 'hello';
  }
}
