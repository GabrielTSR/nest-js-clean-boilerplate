import { CreateAccountController } from '@presentation/controller';
import { Module } from '@nestjs/common';
import AppService from './app.service';

@Module({
    controllers: [CreateAccountController],
    imports: [],
    providers: [AppService]
})
export default class AppModule {}
