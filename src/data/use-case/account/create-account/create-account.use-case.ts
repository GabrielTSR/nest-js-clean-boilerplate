import { AlreadyExistsError } from '@domain/error';
import { CreateAccountService, GetAccountByService } from '@data/service';
import { ENTITIES } from '@domain/constant';
import { Injectable } from '@nestjs/common';
import type {
  CreateAccountUseCaseInput as Input,
  CreateAccountUseCaseOutput as Output,
  CreateAccountUseCaseProtocol as Protocol
} from '.';

@Injectable()
export class CreateAccountUseCase implements Protocol {
  private readonly _getByService: GetAccountByService;
  private readonly _createService: CreateAccountService;

  public constructor(getByService: GetAccountByService, createService: CreateAccountService) {
    this._getByService = getByService;
    this._createService = createService;
  }

  public async execute({ email, password }: Input): Promise<Output> {
    const entity = await this._getByService.execute({ email });

    if (entity !== null) throw new AlreadyExistsError(ENTITIES.ACCOUNT);
    const result = await this._createService.execute({ email, password });

    return result;
  }
}
