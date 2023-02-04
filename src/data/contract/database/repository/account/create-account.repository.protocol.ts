import type { UserModel } from '@domain/model';

export interface CreateAccountRepositoryInput {
    email: string;
    password: string;
}

export type CreateAccountRepositoryOutput = Promise<UserModel>;

export interface CreateAccountRepositoryProtocol {
    execute: (input: CreateAccountRepositoryInput) => CreateAccountRepositoryOutput;
}
