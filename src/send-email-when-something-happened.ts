import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SomethingHappenedEvent } from './something-happend.event';

@EventsHandler(SomethingHappenedEvent)
export class SendEmailWhenSomethingHappened
  implements IEventHandler<SomethingHappenedEvent>
{
  handle(_event: SomethingHappenedEvent): void {
    throw new Error('Method not implemented.');
  }
}
