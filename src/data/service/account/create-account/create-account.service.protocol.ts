import type { UserModel } from '@domain/model';

export interface CreateAccountServiceInput {
    email: string;
    password: string;
}

export type CreateAccountServiceOutput = Promise<UserModel>;

export interface CreateAccountServiceProtocol {
    execute: (input: CreateAccountServiceInput) => CreateAccountServiceOutput;
}
