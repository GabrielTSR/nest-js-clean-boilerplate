export interface HashCompareInput {
  payload: string;
  hashed: string;
}
export type HashCompareOutput = boolean;

export interface HashCompareProtocol {
  execute: (input: HashCompareInput) => HashCompareOutput;
}
