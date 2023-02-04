import { CreateAccountController } from '@presentation/controller';
import { Module } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma';

@Module({
    controllers: [CreateAccountController],
    imports: [],
    providers: [PrismaService]
})
export class AppModule {}
