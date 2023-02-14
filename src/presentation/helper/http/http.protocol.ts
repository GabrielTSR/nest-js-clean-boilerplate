import type { ERROR_NAMES } from '@domain/constant';

interface HttpGenericResponse {
  statusCode: number;
  message: string[];
}

export interface HttpResponse<T> extends HttpGenericResponse {
  content: T;
}

export interface HttpErrorResponse extends HttpGenericResponse {
  error: ERROR_NAMES;
}
