import type { AtLeastOne } from '@domain/helper/util-type';

export type GetListByServiceInput<Entity> = AtLeastOne<Entity>;

export type GetListByServiceOutput<Entity> = Promise<Entity[]>;

export interface GetListByServiceProtocol<Entity> {
    execute: (input: GetListByServiceInput<Entity>) => GetListByServiceOutput<Entity>;
}
