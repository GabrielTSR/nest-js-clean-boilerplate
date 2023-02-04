import { Controller, Post } from '@nestjs/common';
import { CreateAccountUseCase } from '@data/use-case/account';
import {
    CreateAccountDTOInput as Input,
    CreateAccountDTOOutput as Output
} from './create-account.controller.dto';
import type { CreateAccountDTO as DTO } from './create-account.controller.dto';

@Controller('account')
export class CreateAccountController implements DTO {
    private readonly _useCase: CreateAccountUseCase;

    public constructor(useCase: CreateAccountUseCase) {
        this._useCase = useCase;
    }

    @Post()
    @HttpCode(201)
    public async execute({ email, password }: Input): Output {
        try {
            const result = await this._useCase.execute({ email, password });

            return successPost(result);
        } catch (error) {
            return badRequest(error);
        }
    }
}
