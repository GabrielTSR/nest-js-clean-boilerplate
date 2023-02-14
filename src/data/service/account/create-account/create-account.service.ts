import { CreateAccountRepositoryProtocol } from '@data/contract/database/repository';
import { HashEncryptProtocol } from '@data/contract/crypto';
import { Injectable } from '@nestjs/common';
import type {
  CreateAccountServiceInput as Input,
  CreateAccountServiceOutput as Output,
  CreateAccountServiceProtocol as Protocol
} from '.';

@Injectable()
export class CreateAccountService implements Protocol {
  private readonly _repository: CreateAccountRepositoryProtocol;
  private readonly _hashEncrypt: HashEncryptProtocol;

  public constructor(
    repository: CreateAccountRepositoryProtocol,
    hashEncrypt: HashEncryptProtocol
  ) {
    this._repository = repository;
    this._hashEncrypt = hashEncrypt;
  }

  public async execute({ email, password }: Input): Promise<Output> {
    const hashPassword = this._hashEncrypt.execute({ value: password });
    const result = await this._repository.execute({
      email,
      finishedAt: null,
      password: hashPassword
    });

    return result;
  }
}
