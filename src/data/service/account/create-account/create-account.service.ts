import { CreateAccountRepositoryProtocol } from '@data/contract/database/repository';
import { Injectable } from '@nestjs/common';
import type {
    CreateAccountServiceInput as Input,
    CreateAccountServiceOutput as Output,
    CreateAccountServiceProtocol as Protocol
} from '.';

@Injectable()
export class CreateAccountService implements Protocol {
    private readonly _repository: CreateAccountRepositoryProtocol;

    public constructor(repository: CreateAccountRepositoryProtocol) {
        this._repository = repository;
    }

    public async execute(input: Input): Output {
        const result = await this._repository.execute(input);

        return result;
    }
}
