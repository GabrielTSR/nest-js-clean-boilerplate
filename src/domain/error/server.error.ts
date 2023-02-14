import { ERROR_MESSAGES, ERROR_NAMES } from '@domain/constant';
import { HttpException, HttpStatus } from '@nestjs/common';
import { makeErrorResponse } from '@presentation/helper/http';

export class ServerError extends HttpException {
  public constructor() {
    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const errorObject = makeErrorResponse(ERROR_NAMES.SERVER_ERROR, statusCode, [
      ERROR_MESSAGES.SERVER_ERROR
    ]);

    super(errorObject, statusCode);
  }
}
