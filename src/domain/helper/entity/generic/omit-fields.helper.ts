export const omitFields = <Entity, Key extends keyof Entity>(
  entity: Entity,
  keys: Key[]
): Omit<Entity, Key> => {
  const newEntity: Entity = entity;

  // eslint-disable-next-line no-loops/no-loops, @typescript-eslint/no-dynamic-delete
  for (const key of keys) delete newEntity[key];

  return newEntity;
};
