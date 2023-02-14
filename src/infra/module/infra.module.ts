import { CreateAccountRepository, GetAccountByRepository } from '@infra/database/prisma/repository';
import {
  CreateAccountRepositoryProtocol,
  GetAccountByRepositoryProtocol
} from '@data/contract/database/repository';
import { HashEncrypt } from '@infra/crypto';
import { HashEncryptProtocol } from '@data/contract/crypto';
import { Module } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/service';

@Module({
  exports: [CreateAccountRepositoryProtocol, GetAccountByRepositoryProtocol, HashEncryptProtocol],
  providers: [
    PrismaService,
    {
      provide: HashEncryptProtocol,
      useClass: HashEncrypt
    },
    {
      provide: CreateAccountRepositoryProtocol,
      useClass: CreateAccountRepository
    },
    {
      provide: GetAccountByRepositoryProtocol,
      useClass: GetAccountByRepository
    }
  ]
})
export class InfraModule {}
