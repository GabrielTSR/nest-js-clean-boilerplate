import { GetAccountListByRepositoryProtocol } from '@data/contract/database/repository';
import { Injectable } from '@nestjs/common';
import type {
    GetListByServiceInput as Input,
    GetListByServiceOutput as Output,
    GetListByServiceProtocol as Protocol
} from '@data/service';
import type { UserModel } from '@domain/model';

@Injectable()
export class GetAccountListByService implements Protocol<UserModel> {
    private readonly _repository: GetAccountListByRepositoryProtocol;

    public constructor(repository: GetAccountListByRepositoryProtocol) {
        this._repository = repository;
    }

    public async execute(input: Input<UserModel>): Output<UserModel> {
        const result = await this._repository.execute({ ...input, finishedAt: null });

        return result;
    }
}
