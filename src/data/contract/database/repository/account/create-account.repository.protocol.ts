import type { AccountModelGet } from '@domain/model';

export interface CreateAccountRepositoryInput {
  email: string;
  password: string;
  finishedAt: Date | null;
}

export type CreateAccountRepositoryOutput = Omit<AccountModelGet, 'password'>;

export abstract class CreateAccountRepositoryProtocol {
  public execute: (input: CreateAccountRepositoryInput) => Promise<CreateAccountRepositoryOutput>;
}
