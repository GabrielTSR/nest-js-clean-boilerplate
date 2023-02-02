import { Test } from '@nestjs/testing';
import { CreateAccountController } from './create-account.controller';
import AppService from '../../../../app.service';
import type { TestingModule } from '@nestjs/testing';

describe('CreateAccountController', () => {
    let controller: CreateAccountController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CreateAccountController],
            providers: [AppService]
        }).compile();

        controller = app.get<CreateAccountController>(CreateAccountController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(controller.getHello()).toBe('Hello World!');
        });
    });
});
