import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import type { AccountModel } from '@domain/model';

export class CreateAccountDTOInput {
    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public password: string;
}

export type CreateAccountDTOOutput = Promise<AccountModel>;

export interface CreateAccountDTO {
    execute: (input: CreateAccountDTOInput) => CreateAccountDTOOutput;
}
