import type { AccountModel } from '@domain/model';

export interface CreateAccountUseCase {
    Input: {
        email: string;
        password: string;
    };

    Output: Promise<AccountModel>;

    Protocol: {
        execute: (input: CreateAccountUseCaseInput) => Promise<CreateAccountUseCaseOutput>;
    };
}

const teste: CreateAccountUseCase['Input'] = {
    email: 'teste@example.com',
    password: 'testpassword'
};
