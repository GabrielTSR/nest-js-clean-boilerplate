import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/service';
import { omitAccountConfidentialData } from '@domain/helper/entity/account';
import type { AccountModel } from '@domain/model';
import type {
  CreateAccountRepositoryInput,
  CreateAccountRepositoryOutput,
  CreateAccountRepositoryProtocol
} from '@data/contract/database/repository';

@Injectable()
export class CreateAccountRepository implements CreateAccountRepositoryProtocol {
  private readonly _prisma: PrismaService;

  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  public async execute(
    input: CreateAccountRepositoryInput
  ): Promise<CreateAccountRepositoryOutput> {
    const result = (await this._prisma.account.create({ data: input })) as AccountModel;
    const omitted = omitAccountConfidentialData(result);

    return omitted;
  }
}
