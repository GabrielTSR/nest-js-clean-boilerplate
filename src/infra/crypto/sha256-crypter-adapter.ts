import { compareSync, hashSync } from 'bcryptjs';

export class BcryptCrypterAdapter implements Encrypter, HashComparer {
    constructor(private readonly salt: number) {}

    encrypt(input: Encrypter.Input): string {
        const hashedValue = hashSync(input.value, this.salt);

        return hashedValue;
    }

    compare({ payload, hashed }: HashComparer.Input): boolean {
        return compareSync(hashed, payload);
    }
}
