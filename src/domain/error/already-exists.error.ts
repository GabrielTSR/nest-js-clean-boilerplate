import { ERROR_MESSAGES, ERROR_NAMES } from '@domain/constant';
import { HttpException, HttpStatus } from '@nestjs/common';
import { makeErrorResponse } from '@presentation/helper/http';
import type { ENTITIES } from '@domain/constant';

export class AlreadyExistsError extends HttpException {
  public constructor(entityName: ENTITIES) {
    const statusCode = HttpStatus.CONFLICT;
    const errorObject = makeErrorResponse(ERROR_NAMES.ALREADY_EXISTS, statusCode, [
      `${entityName} ${ERROR_MESSAGES.ALREADY_EXISTS}`
    ]);

    super(errorObject, statusCode);
  }
}
