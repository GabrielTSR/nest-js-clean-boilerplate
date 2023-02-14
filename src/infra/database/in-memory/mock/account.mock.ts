import { faker } from '@faker-js/faker';
import type { AccountModel } from '@domain/model';

export const mockAccountGet = async (): Promise<AccountModel> => {
  const [values] = await Promise.all([
    {
      createdAt: faker.date.past(),
      email: faker.internet.email(),
      finishedAt: faker.helpers.arrayElement([null, faker.date.past()]),
      id: Number(faker.random.numeric()),
      password: faker.internet.password(),
      profilePhotoUrl: faker.image.avatar(),
      refreshToken: faker.helpers.arrayElement([null, faker.random.alphaNumeric()]),
      tokenExpiresAt: faker.helpers.arrayElement([null, faker.date.future()]),
      updatedAt: faker.helpers.arrayElement([null, faker.date.recent()])
    }
  ]);

  return values;
};
