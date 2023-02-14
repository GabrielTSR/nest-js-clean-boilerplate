import { Injectable } from '@nestjs/common';
import type {
  GetAccountByRepositoryOutput,
  GetAccountByRepositoryProtocol
} from '@data/contract/database/repository';

@Injectable()
export class GetAccountByFindNullFakeRepository implements GetAccountByRepositoryProtocol {
  public async execute(): Promise<GetAccountByRepositoryOutput> {
    await Promise.all([]);

    return null;
  }
}
