import { GetAccountByRepositoryProtocol } from '@data/contract/database/repository';
import { Injectable } from '@nestjs/common';
import type {
    GetByServiceInput as Input,
    GetByServiceOutput as Output,
    GetByServiceProtocol as Protocol
} from '@data/service';
import type { UserModel } from '@domain/model';

@Injectable()
export class GetAccountByService implements Protocol<UserModel> {
    private readonly _repository: GetAccountByRepositoryProtocol;

    public constructor(repository: GetAccountByRepositoryProtocol) {
        this._repository = repository;
    }

    public async execute(input: Input<UserModel>): Output<UserModel> {
        const result = await this._repository.execute({ ...input, finishedAt: null });

        return result;
    }
}
