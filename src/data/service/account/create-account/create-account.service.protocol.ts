import type { AccountModelGet } from '@domain/model';

export interface CreateAccountServiceInput {
  email: string;
  password: string;
}

export type CreateAccountServiceOutput = AccountModelGet;

export interface CreateAccountServiceProtocol {
  execute: (input: CreateAccountServiceInput) => Promise<CreateAccountServiceOutput>;
}
