This is a PoC repository showing how we can provide our error handling solution for errors thrown from event handlers.
Check it [here](src/my-cqrs.module.ts)

Refs https://github.com/nestjs/cqrs/issues/409

## Notice! 
**Wrapping it with try catch is not a recommended way!**

You should think about what is the best way to handler exceptions in your application to prevent it from being in an inconsistent state!