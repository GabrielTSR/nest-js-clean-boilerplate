import { hashConfig } from '@main/config/environment';
import { hashSync } from 'bcryptjs';
import type {
  HashEncryptInput,
  HashEncryptOutput,
  HashEncryptProtocol
} from '@data/contract/crypto';

export class HashEncrypt implements HashEncryptProtocol {
  private readonly _salt: number;

  public constructor() {
    this._salt = hashConfig.salt;
  }

  public execute(input: HashEncryptInput): HashEncryptOutput {
    const hashedValue = hashSync(input.value, this._salt);

    return hashedValue;
  }
}
