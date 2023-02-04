import type { AtLeastOne } from '@domain/helper/util-type';
import type { UserModel } from '@domain/model';

export type GetAccountListByRepositoryInput = AtLeastOne<UserModel>;

export type GetAccountListByRepositoryOutput = Promise<UserModel[]>;

export interface GetAccountListByRepositoryProtocol {
    execute: (input: GetAccountListByRepositoryInput) => GetAccountListByRepositoryOutput;
}
