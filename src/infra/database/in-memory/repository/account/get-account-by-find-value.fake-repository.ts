import { Injectable } from '@nestjs/common';
import { mockAccountGet } from '@infra/database/in-memory/mock';
import { omitAccountConfidentialData } from '@domain/helper/entity/account';
import type { AccountModel } from '@domain/model';
import type {
  GetAccountByRepositoryOutput,
  GetAccountByRepositoryProtocol
} from '@data/contract/database/repository';

@Injectable()
export class GetAccountByFindValueFakeRepository implements GetAccountByRepositoryProtocol {
  public async execute(): Promise<GetAccountByRepositoryOutput> {
    const result: AccountModel = await mockAccountGet();

    const omitted = omitAccountConfidentialData(result);

    return omitted;
  }
}
