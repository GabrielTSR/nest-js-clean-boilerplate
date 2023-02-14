import type { AtLeastOne } from '@domain/helper/util-type';

export type GetListByServiceInput<Entity> = AtLeastOne<Entity>;

export type GetListByServiceOutput<Entity> = Entity[];

export interface GetListByServiceProtocol<Entity> {
  execute: (input: GetListByServiceInput<Entity>) => Promise<GetListByServiceOutput<Entity>>;
}
