export interface HashEncryptInput {
  value: string;
}
export type HashEncryptOutput = string;

export abstract class HashEncryptProtocol {
  public execute: (input: HashEncryptInput) => HashEncryptOutput;
}
