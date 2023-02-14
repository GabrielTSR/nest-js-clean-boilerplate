import { CreateAccountUseCase as UseCase } from '@data/use-case';
import { AccountModelGet } from '@domain/model';
import { mock, MockProxy } from 'jest-mock-extended';
import { CreateAccountController as Controller } from './create-account.controller';
import { mockAccountGet } from '@infra/database/in-memory/mock';
import { faker } from '@faker-js/faker';
import { AlreadyExistsError, ServerError } from '@domain/error';
import { ENTITIES } from '@domain/constant';
import { successPost } from '@presentation/helper/http';

describe('CreateAccountController', () => {
  let mockedResult: AccountModelGet;
  let sut: Controller;
  let useCase: MockProxy<UseCase>;

  beforeAll(async () => {
    mockedResult = await mockAccountGet();
    useCase = mock<UseCase>();
    useCase.execute.mockResolvedValue({} as any);
  });

  beforeEach(() => {
    sut = new Controller(useCase);
  });

  it('should call all with correct input', async () => {
    const request = { email: faker.internet.email(), password: faker.internet.password() };
    await sut.execute(request);
    expect(useCase.execute).toHaveBeenCalledWith({
      request
    });
    expect(useCase.execute).toHaveBeenCalledTimes(1);
  });

  it('should re-throw if it is the exception is expected', async () => {
    useCase.execute.mockRejectedValueOnce(new AlreadyExistsError(ENTITIES.ACCOUNT));
    const request = { email: faker.internet.email(), password: faker.internet.password() };
    const promise = sut.execute(request);
    await expect(promise).rejects.toThrow(new AlreadyExistsError(ENTITIES.ACCOUNT));
  });

  it('should throw ServerError if the error is not expected', async () => {
    useCase.execute.mockRejectedValueOnce(new Error());
    const request = { email: faker.internet.email(), password: faker.internet.password() };
    const promise = sut.execute(request);
    await expect(promise).rejects.toThrow(new ServerError());
  });

  it('should return the response if it is everything correct', async () => {
    const request = { email: faker.internet.email(), password: faker.internet.password() };
    const response = await sut.execute(request);
    expect(response).toMatchObject(successPost(mockedResult));
  });
});
