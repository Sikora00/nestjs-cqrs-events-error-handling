import { Module, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { ExplorerService } from '@nestjs/cqrs/dist/services/explorer.service';

@Module({
  imports: [CqrsModule],
  providers: [ExplorerService],
  exports: [CqrsModule],
})
export class MyCqrsModule implements OnModuleInit {
  constructor(
    private readonly explorer: ExplorerService,
    private moduleRef: ModuleRef,
  ) {}
  onModuleInit() {
    const { events } = this.explorer.explore();
    events.forEach(this.wrapWithTryCatch.bind(this));
  }

  private wrapWithTryCatch(handler): void {
    const instance = this.moduleRef.get(handler, { strict: false });
    const methodRef = instance.handle;

    const newMethod = async (event) => {
      try {
        await methodRef.call(handler, event);
      } catch (e) {
        console.error('yo');
      }
    };

    instance.handle = newMethod;
  }
}
