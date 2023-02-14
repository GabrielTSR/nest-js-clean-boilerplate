import { Injectable } from '@nestjs/common';
import { mockAccountGet } from '@infra/database/in-memory/mock';
import { omitAccountConfidentialData } from '@domain/helper/entity/account';
import type {
  CreateAccountRepositoryOutput,
  CreateAccountRepositoryProtocol
} from '@data/contract/database/repository';

@Injectable()
export class CreateAccountFakeRepository implements CreateAccountRepositoryProtocol {
  public async execute(): Promise<CreateAccountRepositoryOutput> {
    const result = await mockAccountGet();

    const omitted = omitAccountConfidentialData(result);

    return omitted;
  }
}
