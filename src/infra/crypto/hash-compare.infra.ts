import { compareSync } from 'bcryptjs';
import type {
  HashCompareInput,
  HashCompareOutput,
  HashCompareProtocol
} from '@data/contract/crypto';

export class HashCompare implements HashCompareProtocol {
  public execute({ payload, hashed }: HashCompareInput): HashCompareOutput {
    return compareSync(hashed, payload);
  }
}
