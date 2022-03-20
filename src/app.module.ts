import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyCqrsModule } from './my-cqrs.module';
import { SendEmailWhenSomethingHappened } from './send-email-when-something-happened';

@Module({
  imports: [MyCqrsModule],
  controllers: [AppController],
  providers: [AppService, SendEmailWhenSomethingHappened],
})
export class AppModule {}
