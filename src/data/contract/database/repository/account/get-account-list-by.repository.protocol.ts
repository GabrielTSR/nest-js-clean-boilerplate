import type { AccountModelGet } from '@domain/model';
import type { AtLeastOne } from '@domain/helper/util-type';

export type GetAccountListByRepositoryInput = AtLeastOne<AccountModelGet>;

export type GetAccountListByRepositoryOutput = AccountModelGet[];

export abstract class GetAccountListByRepositoryProtocol {
  public execute: (
    input: GetAccountListByRepositoryInput
  ) => Promise<GetAccountListByRepositoryOutput>;
}
