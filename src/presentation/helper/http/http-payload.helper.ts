import { HttpStatus } from '@nestjs/common';
import { SUCCESS_MESSAGES } from '@domain/constant';
import type { ERROR_NAMES } from '@domain/constant';
import type { HttpErrorResponse, HttpResponse } from './http.protocol';

export const successGet = <T>(data: T): HttpResponse<T> => ({
  content: data,
  message: [SUCCESS_MESSAGES.GET],
  statusCode: HttpStatus.OK
});

export const successPost = <T>(data: T): HttpResponse<T> => ({
  content: data,
  message: [SUCCESS_MESSAGES.POST],
  statusCode: HttpStatus.CREATED
});

export const successEdit = <T>(data: T): HttpResponse<T> => ({
  content: data,
  message: [SUCCESS_MESSAGES.PUT],
  statusCode: HttpStatus.OK
});

export const successDelete = (): HttpResponse<null> => ({
  content: null,
  message: [SUCCESS_MESSAGES.DELETE],
  statusCode: HttpStatus.NO_CONTENT
});

export const makeErrorResponse = (
  error: ERROR_NAMES,
  statusCode: number,
  message: string[]
): HttpErrorResponse => ({
  error,
  message,
  statusCode
});
