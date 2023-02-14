import { CreateAccountService, GetAccountByService } from '@data/service';
import { CreateAccountUseCase } from '@data/use-case';
import { Module } from '@nestjs/common';

@Module({
  exports: [CreateAccountUseCase, GetAccountByService, CreateAccountService, GetAccountByService],
  providers: [CreateAccountUseCase, GetAccountByService, CreateAccountService, GetAccountByService]
})
export class DataModule {}
