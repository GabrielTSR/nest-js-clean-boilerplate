export class AlreadyExistsError extends Error {
    public constructor(paramName: string) {
        super(`${paramName} já foi criado com estes dados.`);
        this.name = 'AlreadyExistsError';
    }
}
