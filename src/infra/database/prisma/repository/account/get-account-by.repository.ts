import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/service';
import { omitAccountConfidentialData } from '@domain/helper/entity/account';
import type { AccountModel } from '@domain/model';
import type {
  GetAccountByRepositoryInput,
  GetAccountByRepositoryOutput,
  GetAccountByRepositoryProtocol
} from '@data/contract/database/repository';

@Injectable()
export class GetAccountByRepository implements GetAccountByRepositoryProtocol {
  private readonly _prisma: PrismaService;
  public constructor(prisma: PrismaService) {
    this._prisma = prisma;
  }

  public async execute(input: GetAccountByRepositoryInput): Promise<GetAccountByRepositoryOutput> {
    const result = (await this._prisma.account.findFirst({
      where: input
    })) as AccountModel | null;

    if (result !== null) {
      const omitted = omitAccountConfidentialData(result);

      return omitted;
    }

    return result;
  }
}
