import { omitFields } from './omit-fields.helper';

export const filterFields = <Entity, Key extends keyof Entity>(
  entities: Entity[],
  keys: Key[]
): Array<Omit<Entity, Key>> =>
  entities.map((entity) => {
    const newEntity: Omit<Entity, Key> = omitFields(entity, keys);

    return newEntity;
  });
