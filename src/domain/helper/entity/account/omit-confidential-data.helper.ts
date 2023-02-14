import { omitFields } from '@domain/helper/entity/generic';
import type { AccountModel, AccountModelGet } from '@domain/model';

export const omitAccountConfidentialData = (account: AccountModel): AccountModelGet => {
  const omitted = omitFields(account, ['password', 'refreshToken', 'tokenExpiresAt']);

  return omitted;
};
