import { GetAccountListByRepositoryProtocol } from '@data/contract/database/repository';
import { Injectable } from '@nestjs/common';
import type { AccountModelGet } from '@domain/model';
import type {
  GetListByServiceInput as Input,
  GetListByServiceOutput as Output,
  GetListByServiceProtocol as Protocol
} from '@data/service';

@Injectable()
export class GetAccountListByService implements Protocol<AccountModelGet> {
  private readonly _repository: GetAccountListByRepositoryProtocol;

  public constructor(repository: GetAccountListByRepositoryProtocol) {
    this._repository = repository;
  }

  public async execute(input: Input<AccountModelGet>): Promise<Output<AccountModelGet>> {
    const result = await this._repository.execute({ ...input, finishedAt: null });

    return result;
  }
}
