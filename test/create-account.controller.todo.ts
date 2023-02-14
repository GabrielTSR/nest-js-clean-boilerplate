import { Test, TestingModule } from '@nestjs/testing';
import { CreateAccountUseCase } from '@data/use-case';
import { AlreadyExistsError } from '@domain/error';
import { CreateAccountController } from '@presentation/controller';
import { faker } from '@faker-js/faker';
import { CreateAccountService, GetAccountByService } from '@data/service';
import {
  CreateAccountFakeRepository,
  GetAccountByFindValueFakeRepository
} from '@infra/database/in-memory/repository';
import { HashEncryptProtocol } from '@data/contract/crypto';
import { HashEncrypt } from '@infra/crypto';
import {
  CreateAccountRepositoryProtocol,
  GetAccountByRepositoryProtocol
} from '@data/contract/database/repository';
import { HttpStatus, ModuleMetadata } from '@nestjs/common';
import { GetAccountByFindNullFakeRepository } from '@infra/database/in-memory/repository/account/get-account-by-find-null.fake-repository';
import { AccountModelGet } from '@domain/model';
import { ENTITIES, SUCCESS_MESSAGES } from '@domain/constant';

describe('CreateAccount', () => {
  let expectedResult: AccountModelGet;
  let metaData: ModuleMetadata;
  let useCaseNest: CreateAccountUseCase;
  let useCaseSpy: jest.SpyInstance<Promise<AccountModelGet | null>>;
  let controllerNest: CreateAccountController;

  const startOrResetTestingModule = async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule(metaData).compile();

    useCaseNest = module.get<CreateAccountUseCase>(CreateAccountUseCase);
    useCaseSpy = jest.spyOn(useCaseNest, 'execute');

    controllerNest = module.get<CreateAccountController>(CreateAccountController);
  };

  beforeEach(async () => {
    metaData = {
      controllers: [CreateAccountController],
      providers: [
        CreateAccountUseCase,
        CreateAccountService,
        GetAccountByService,
        {
          provide: HashEncryptProtocol,
          useClass: HashEncrypt
        },
        {
          provide: CreateAccountRepositoryProtocol,
          useClass: CreateAccountFakeRepository
        },
        {
          provide: GetAccountByRepositoryProtocol,
          useClass: GetAccountByFindNullFakeRepository
        }
      ]
    };
    await startOrResetTestingModule();

    expectedResult = {
      createdAt: expect.any(Date),
      email: expect.any(String),
      finishedAt: expect.toBeOneOf([expect.any(Date), null]),
      id: expect.any(Number),
      profilePhotoUrl: expect.toBeOneOf([expect.any(String), null]),
      updatedAt: expect.toBeOneOf([expect.any(Date), null])
    };
  });

  describe('validation', () => {
    it('should throw if email is invalid', async () => {
      const request = { emaila: 2, password: faker.internet.password() };
      const promise = controllerNest.execute(request as any);
      await expect(promise).rejects.toThrow(new AlreadyExistsError(ENTITIES.ACCOUNT));
    });
  });

  describe('integration', () => {
    it('should throw if the user already exists', async () => {
      metaData.providers?.push({
        provide: GetAccountByRepositoryProtocol,
        useClass: GetAccountByFindValueFakeRepository
      });
      await startOrResetTestingModule();

      const request = { email: faker.internet.email(), password: faker.internet.password() };

      const promise = controllerNest.execute(request);

      await expect(promise).rejects.toThrow(new AlreadyExistsError(ENTITIES.ACCOUNT));
    });

    it('should return the correct data if the account is created', async () => {
      const request = { email: faker.internet.email(), password: faker.internet.password() };
      const result = await controllerNest.execute(request);

      expect(useCaseSpy).toHaveBeenCalledWith(request);
      expect(result.statusCode).toBe(HttpStatus.CREATED);
      expect(result.message).toEqual([SUCCESS_MESSAGES.POST]);
      expect(result.content).toEqual(expectedResult);
    });
  });
});
