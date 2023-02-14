import { GetAccountByRepositoryProtocol } from '@data/contract/database/repository';
import { Injectable } from '@nestjs/common';
import type { AccountModelGet } from '@domain/model';
import type {
  GetByServiceInput as Input,
  GetByServiceOutput as Output,
  GetByServiceProtocol as Protocol
} from '@data/service';

@Injectable()
export class GetAccountByService implements Protocol<AccountModelGet> {
  private readonly _repository: GetAccountByRepositoryProtocol;

  public constructor(repository: GetAccountByRepositoryProtocol) {
    this._repository = repository;
  }

  public async execute(input: Input<AccountModelGet>): Promise<Output<AccountModelGet>> {
    const result = await this._repository.execute({ ...input, finishedAt: null });

    return result;
  }
}
