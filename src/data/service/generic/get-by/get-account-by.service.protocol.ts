import type { AtLeastOne } from '@domain/helper/util-type';

export type GetByServiceInput<T> = AtLeastOne<T>;

export type GetByServiceOutput<T> = T | null;

export interface GetByServiceProtocol<T> {
  execute: (input: GetByServiceInput<T>) => Promise<GetByServiceOutput<T>>;
}
