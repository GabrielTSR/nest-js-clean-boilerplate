import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import type { INestApplication, OnModuleInit } from '@nestjs/common';

@Injectable()
export default class AppService extends PrismaClient implements OnModuleInit {
    public async onModuleInit(): Promise<void> {
        await this.$connect();
    }

    public enableShutdownHooks(app: INestApplication): void {
        this.$on('beforeExit', async (): Promise<void> => {
            await app.close();
        });
    }

    public getHello(): string {
        return 'Hello World!';
    }
}
