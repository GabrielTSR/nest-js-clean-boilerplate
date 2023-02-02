import { NestFactory } from '@nestjs/core';
import AppModule from '../app.module';
import env from './config/environment.config';

void (async (): Promise<void> => {
    const app = await NestFactory.create(AppModule);

    await app.listen(env.apiPort);
})();
