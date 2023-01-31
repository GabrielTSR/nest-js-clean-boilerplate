import { sign, verify } from 'jsonwebtoken';

export class JwtTokenAdapter implements TokenGenerator, TokenValidator {
    constructor(private readonly secret: string) {}

    async validate({ accessToken }: TokenValidator.Input): Promise<TokenValidator.Output> {
        try {
            if (!accessToken) throw new Error();
            const decoded = verify(accessToken, this.secret) as TokenPayload;

            return { isValid: true, payload: decoded };
        } catch {
            return { isValid: false };
        }
    }

    async generate({ key, sub, expirationInMs }: TokenGenerator.Input): Promise<string> {
        const expirationInSeconds = expirationInMs / 1000;

        return sign({ key, sub }, this.secret, { expiresIn: expirationInSeconds });
    }
}
