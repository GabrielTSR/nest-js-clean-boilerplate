import { REQUEST_FIELDS, PASSWORD, VALIDATION_ERROR_MESSAGE } from '@domain/constant';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import type { AccountModelGet } from '@domain/model';

export class CreateAccountRequest {
  @IsNotEmpty({ message: `${REQUEST_FIELDS.EMAIL} ${VALIDATION_ERROR_MESSAGE.REQUIRED}` })
  @IsEmail(
    {},
    {
      message: `${REQUEST_FIELDS.EMAIL} ${VALIDATION_ERROR_MESSAGE.INVALID}`
    }
  )
  public email: string;

  @IsNotEmpty({ message: `${REQUEST_FIELDS.PASSWORD} ${VALIDATION_ERROR_MESSAGE.REQUIRED}` })
  @IsString({ message: `${REQUEST_FIELDS.PASSWORD} ${VALIDATION_ERROR_MESSAGE.STRING}` })
  @MinLength(PASSWORD.MINIMUM_SIZE, {
    message: `${PASSWORD.MINIMUM_SIZE} ${VALIDATION_ERROR_MESSAGE.IS_THE_MAXIMUM_VALUE_FOR} ${REQUEST_FIELDS.PASSWORD}`
  })
  public password: string;
}

export type CreateAccountResponse = AccountModelGet;
