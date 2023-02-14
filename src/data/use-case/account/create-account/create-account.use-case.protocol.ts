import type { AccountModelGet } from '@domain/model';

export interface CreateAccountUseCaseInput {
  email: string;
  password: string;
}

export type CreateAccountUseCaseOutput = AccountModelGet;

export interface CreateAccountUseCaseProtocol {
  execute: (input: CreateAccountUseCaseInput) => Promise<CreateAccountUseCaseOutput>;
}
