import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateAccountUseCase } from '@data/use-case';
import { CreateAccountRequest as Request } from './create-account.controller.dto';
import { ServerError } from '@domain/error';
import { successPost } from '@presentation/helper/http';
import type { AccountModelGet } from '@domain/model';
import type { HttpResponse } from '@presentation/helper/http';
import type { CreateAccountResponse as Response } from './create-account.controller.dto';

@Controller('account')
export class CreateAccountController {
  private readonly _useCase: CreateAccountUseCase;

  public constructor(useCase: CreateAccountUseCase) {
    this._useCase = useCase;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async execute(@Body() { email, password }: Request): Promise<HttpResponse<Response>> {
    try {
      const result: AccountModelGet = await this._useCase.execute({ email, password });

      return successPost(result);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new ServerError();
    }
  }
}
