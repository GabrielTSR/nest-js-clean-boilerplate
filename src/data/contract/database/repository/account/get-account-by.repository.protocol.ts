import type { AccountModelGet } from '@domain/model';
import type { AtLeastOne } from '@domain/helper/util-type';

export type GetAccountByRepositoryInput = AtLeastOne<AccountModelGet>;

export type GetAccountByRepositoryOutput = AccountModelGet | null;

export abstract class GetAccountByRepositoryProtocol {
  public execute: (input: GetAccountByRepositoryInput) => Promise<GetAccountByRepositoryOutput>;
}
