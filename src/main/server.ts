import { AppModule, environmentConfig } from './config';
import { NestFactory } from '@nestjs/core';

void (async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  await app.listen(environmentConfig.apiPort);
})();
