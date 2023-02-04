import type { AtLeastOne } from '@domain/helper/util-type';
import type { UserModel } from '@domain/model';

export type GetAccountByRepositoryInput = AtLeastOne<UserModel>;

export type GetAccountByRepositoryOutput = Promise<UserModel | null>;

export interface GetAccountByRepositoryProtocol {
    execute: (input: GetAccountByRepositoryInput) => GetAccountByRepositoryOutput;
}
