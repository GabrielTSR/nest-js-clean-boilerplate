import { Module } from '@nestjs/common';
// eslint-disable-next-line sort-imports
import AppController from './app.controller';
import AppService from './app.service';

@Module({
    controllers: [AppController],
    imports: [],
    providers: [AppService]
})
export default class AppModule {}
